package com.atmat.sua.services;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.atmat.sua.dto.EmployeeDTO;
import com.atmat.sua.entities.Employee;
import com.atmat.sua.entities.Role;
import com.atmat.sua.entities.repositories.EmployeeRepository;
import com.atmat.sua.entities.repositories.RoleRepository;
import com.atmat.sua.services.exceptions.DatabaseException;
import com.atmat.sua.services.exceptions.ResourceNotFoundException;

@Service
public class EmployeeService {
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Autowired
	private EmployeeRepository repository;
	
	@Autowired
	private RoleRepository roleRepository;

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

	@Transactional
	public EmployeeDTO insert(EmployeeDTO dto) {
		String initialLogin = dto.getCpf().substring(0, 6);
		String initialPassword = passwordEncoder.encode(dto.getCpf().substring(0, 6));
		Employee entity = new Employee(null, dto.getName(), dto.getCpf(), dto.getAdmissionDate(), initialLogin, initialPassword, true, null);
		copyRolesFromDtoToEntity(entity, dto);
		entity = repository.save(entity);
		return new EmployeeDTO(entity);
	}

	@Transactional
	public EmployeeDTO update(Long id, EmployeeDTO dto) {
		try {
			Employee entity = repository.getById(id);
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
		entity.setLogin(dto.getLogin());
		copyRolesFromDtoToEntity(entity, dto);
	}
	
	private void copyRolesFromDtoToEntity(Employee entity, EmployeeDTO dto) {
		if(dto.getRoles() != null) {
			Set<Role> roles = new HashSet<>();
			dto.getRoles().forEach(x -> roles.add(roleRepository.getById(x.getId())));
			entity.setRoles(roles);
		}
	}
}
