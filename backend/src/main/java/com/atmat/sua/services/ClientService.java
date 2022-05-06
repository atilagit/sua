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
import com.atmat.sua.dto.ClientDTO;
import com.atmat.sua.dto.SimplifiedClientDTO;
import com.atmat.sua.entities.Address;
import com.atmat.sua.entities.Client;
import com.atmat.sua.repositories.AddressRepository;
import com.atmat.sua.repositories.ClientRepository;
import com.atmat.sua.services.exceptions.DatabaseException;
import com.atmat.sua.services.exceptions.ResourceNotFoundException;

@Service
public class ClientService {
	
	@Autowired
	private ClientRepository repository;
	
	@Autowired
	private AddressRepository addressRepository;

	@Transactional(readOnly = true)
	public Page<ClientDTO> findAllPaged(PageRequest pageRequest){
		Page<Client> list = repository.findAll(pageRequest);
		return list.map(x -> new ClientDTO(x));
	}

	@Transactional(readOnly = true)
	public ClientDTO findById(Long id) {
		Optional<Client> obj = repository.findById(id);
		Client entity = obj.orElseThrow(() -> new ResourceNotFoundException(Client.class.getSimpleName() + " not found"));
		return new ClientDTO(entity);
	}
	
	@Transactional(readOnly = true)
	public List<SimplifiedClientDTO> findAllActiveNames() {
		List<Client> list = repository.findAll();
		List<SimplifiedClientDTO> listDto = new ArrayList<>();
		for (Client entity : list) {
			if (entity.getActive()) {
				listDto.add(new SimplifiedClientDTO(entity));
			}
		}
		Collections.sort(listDto);
		return listDto;
	}
	
	@Transactional
	public ClientDTO insert(ClientDTO dto) {
		Client entity = new Client(null, dto.getContact(), dto.getCorporateName(), dto.getCpf(), dto.getCnpj(), dto.getActive(), null);
		if(dto.getAddress() != null) createAdrressFromDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new ClientDTO(entity);
	}
	
	@Transactional
	public ClientDTO update(Long id, ClientDTO dto) {
		try {
			Client entity = repository.getById(id);
			updateEntityWithDtoData(entity, dto);
			entity = repository.save(entity);
			return new ClientDTO(entity);
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
	
	private void updateEntityWithDtoData(Client entity, ClientDTO dto) {
		entity.setContact(dto.getContact());
		entity.setCorporateName(dto.getCorporateName());
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

	private void createAdrressFromDtoToEntity(ClientDTO dto, Client entity) {
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
