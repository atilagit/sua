package com.atmat.sua.services;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.atmat.sua.dto.AddressDTO;
import com.atmat.sua.dto.ProviderDTO;
import com.atmat.sua.dto.SimplifiedProviderDTO;
import com.atmat.sua.entities.Address;
import com.atmat.sua.entities.Provider;
import com.atmat.sua.repositories.AddressRepository;
import com.atmat.sua.repositories.ProviderRepository;
import com.atmat.sua.services.exceptions.DatabaseException;
import com.atmat.sua.services.exceptions.ResourceNotFoundException;

@Service
public class ProviderService {
	
	@Autowired
	private ProviderRepository repository;
	
	@Autowired
	private AddressRepository addressRepository;

	@Transactional(readOnly = true)
	public Page<ProviderDTO> findAllPaged(PageRequest pageRequest){
		Page<Provider> list = repository.findAll(pageRequest);
		return list.map(x -> new ProviderDTO(x));
	}

	@Transactional(readOnly = true)
	public ProviderDTO findById(Long id) {
		Optional<Provider> obj = repository.findById(id);
		Provider entity = obj.orElseThrow(() -> new ResourceNotFoundException(Provider.class.getSimpleName() + " not found"));
		return new ProviderDTO(entity);
	}
	
	@Transactional(readOnly = true)
	public List<SimplifiedProviderDTO> findAllActiveNames() {
		List<Provider> list = repository.findAll();
		List<SimplifiedProviderDTO> listDto = new ArrayList<>();
		for (Provider entity : list) {
			if (entity.getActive()) {
				listDto.add(new SimplifiedProviderDTO(entity));
			}
		}
		Collections.sort(listDto);
		return listDto;
	}

	@Transactional
	public ProviderDTO insert(ProviderDTO dto) {
		Provider entity = new Provider(null, dto.getName(), dto.getCpf(), dto.getCnpj(), dto.getActive(), null, null);
		if(dto.getAddress() != null) createAdrressFromDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new ProviderDTO(entity);
	}

	@Transactional
	public ProviderDTO update(Long id, ProviderDTO dto) {
		try {
			Provider entity = repository.getOne(id);
			updateEntityWithDtoData(entity, dto);
			entity = repository.save(entity);
			return new ProviderDTO(entity);
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
	
	private void updateEntityWithDtoData(Provider entity, ProviderDTO dto) {
		entity.setName(dto.getName());
		entity.setCpf(dto.getCpf());
		entity.setCnpj(dto.getCnpj());
		if (entity.getAddress() == null && dto.getAddress() != null) {
			createAdrressFromDtoToEntity(dto, entity);
		}
		else if (entity.getAddress() != null && dto.getAddress() != null) {
			copyAdrressFromDtoToEntity(dto.getAddress(), entity.getAddress());
		}else {
			entity.setAddress(null);
		}
	}
	
	private void createAdrressFromDtoToEntity(ProviderDTO dto, Provider entity) {
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
}
