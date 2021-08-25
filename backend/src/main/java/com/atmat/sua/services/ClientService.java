package com.atmat.sua.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.atmat.sua.dto.AddressDTO;
import com.atmat.sua.dto.ClientDTO;
import com.atmat.sua.entities.Address;
import com.atmat.sua.entities.Client;
import com.atmat.sua.entities.repositories.AddressRepository;
import com.atmat.sua.entities.repositories.ClientRepository;
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
	
	@Transactional
	public ClientDTO insert(ClientDTO dto) {
		Client entity = new Client(null, dto.getContact(), dto.getCorporateName(), dto.getCpf(), dto.getCnpj(), dto.getActive(), null);
		if(dto.getAddress() != null) copyAdrressFromDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new ClientDTO(entity);
	}

	private void copyAdrressFromDtoToEntity(ClientDTO dto, Client entity) {
		AddressDTO addressDto = dto.getAddress();
		Address entityAdrress = new Address(null, addressDto.getStreet(), addressDto.getNumber(), addressDto.getNeighborhood(), addressDto.getComplement(), addressDto.getCity(), addressDto.getState(), addressDto.getCep(), null);
		entityAdrress = addressRepository.save(entityAdrress);
		entity.setAddress(entityAdrress);
	}
}
