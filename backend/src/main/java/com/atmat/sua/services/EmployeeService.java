package com.atmat.sua.services;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.persistence.EntityNotFoundException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.atmat.sua.dto.AddressDTO;
import com.atmat.sua.dto.EmployeeDTO;
import com.atmat.sua.dto.SimplifiedEmployeeDTO;
import com.atmat.sua.entities.Address;
import com.atmat.sua.entities.Employee;
import com.atmat.sua.entities.Role;
import com.atmat.sua.repositories.AddressRepository;
import com.atmat.sua.repositories.EmployeeRepository;
import com.atmat.sua.repositories.RoleRepository;
import com.atmat.sua.services.exceptions.DatabaseException;
import com.atmat.sua.services.exceptions.ResourceNotFoundException;

@Service
public class EmployeeService implements UserDetailsService{
	
	private static Logger logger = LoggerFactory.getLogger(EmployeeService.class);
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Autowired
	private EmployeeRepository repository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	private AddressRepository addressRepository;

	@Transactional(readOnly = true)
	public Page<EmployeeDTO> findAllPaged(PageRequest pageRequest){
		Page<Employee> list = repository.findAll(pageRequest);
		return list.map(x -> new EmployeeDTO(x));
	}

	@Transactional(readOnly = true)
	public EmployeeDTO findById(Long id) {
		Optional<Employee> obj = repository.findById(id);
		Employee entity = obj.orElseThrow(() -> new ResourceNotFoundException(Employee.class.getSimpleName() + " not found"));
		return new EmployeeDTO(entity);
	}
	
	@Transactional(readOnly = true)
	public List<SimplifiedEmployeeDTO> findAllActiveNames() {
		List<Employee> list = repository.findAll();
		List<SimplifiedEmployeeDTO> listDto = new ArrayList<>();
		for (Employee entity : list) {
			if (entity.getActive()) {
				listDto.add(new SimplifiedEmployeeDTO(entity));
			}
		}
		Collections.sort(listDto);
		return listDto;
	}

	@Transactional
	public EmployeeDTO insert(EmployeeDTO dto) {
		String initialLogin = dto.getCpf();
		String initialPassword = passwordEncoder.encode(dto.getCpf().substring(0, 6));
		Employee entity = new Employee(null, dto.getName(), dto.getCpf(), dto.getAdmissionDate(), initialLogin, initialPassword, true, null);
		copyRolesFromDtoToEntity(entity, dto);
		if(dto.getAddress() != null) createAdrressFromDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new EmployeeDTO(entity);
	}

	@Transactional
	public EmployeeDTO update(Long id, EmployeeDTO dto) {
		try {
			Employee entity = repository.getOne(id);
			updateEntityWithDtoData(entity, dto);
			entity = repository.save(entity);
			return new EmployeeDTO(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id " + id + " not found");
		}
	}
	
	public void delete(Long id) {
		try {
		repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id " + id + " not found");
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Integrity violation");
		}
		
	}
	
	private void updateEntityWithDtoData(Employee entity, EmployeeDTO dto) {
		entity.setName(dto.getName());
		entity.setAdmissionDate(dto.getAdmissionDate());
		entity.setCpf(dto.getCpf());
		entity.setLogin((dto.getLogin() != null)? dto.getLogin() : dto.getCpf());
		copyRolesFromDtoToEntity(entity, dto);
		if (entity.getAddress() == null && dto.getAddress() != null) {
			createAdrressFromDtoToEntity(dto, entity);
		}
		else if (entity.getAddress() != null && dto.getAddress() != null) {
			copyAdrressFromDtoToEntity(dto.getAddress(), entity.getAddress());
		}else {
			entity.setAddress(null);
		}
	}
	
	private void copyRolesFromDtoToEntity(Employee entity, EmployeeDTO dto) {
		if(dto.getRoles() != null) {
			Set<Role> roles = new HashSet<>();
			dto.getRoles().forEach(x -> roles.add(roleRepository.getOne(x.getId())));
			entity.setRoles(roles);
		}
	}
	
	private void createAdrressFromDtoToEntity(EmployeeDTO dto, Employee entity) {
		AddressDTO addressDto = dto.getAddress();
		Address entityAdrress = new Address(null, addressDto.getStreet(), addressDto.getNumber(), addressDto.getNeighborhood(), addressDto.getComplement(), addressDto.getCity(), addressDto.getState(), addressDto.getCep(), null);
		entityAdrress = addressRepository.save(entityAdrress);
		entity.setAddress(entityAdrress);
	}
	
	private void copyAdrressFromDtoToEntity(AddressDTO addressDto, Address address) {
		address.setCep(addressDto.getCep());
		address.setCity(addressDto.getCity());
		address.setComplement(addressDto.getComplement());
		address.setNeighborhood(addressDto.getNeighborhood());
		address.setNumber(addressDto.getNumber());
		address.setState(addressDto.getState());
		address.setStreet(addressDto.getStreet());
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Employee user = repository.findByLogin(username);
		if(user == null) {
			logger.error("loadUserByUsername() - User not found: " + username);
			throw new UsernameNotFoundException("Login not found");
		}
		logger.info("loadUserByUsername() - User found: " + username);
		return user;
	}
}
