package com.atmat.sua.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.atmat.sua.dto.ProviderDTO;
import com.atmat.sua.entities.Provider;
import com.atmat.sua.entities.repositories.ProviderRepository;
import com.atmat.sua.services.exceptions.EntityNotFoundException;

@Service
public class ProviderService {
	
	@Autowired
	private ProviderRepository repository;

	@Transactional(readOnly = true)
	public List<ProviderDTO> findAll(){
		List<Provider> list = repository.findAll();
		return list.stream().map(x -> new ProviderDTO(x)).collect(Collectors.toList());
	}

	@Transactional(readOnly = true)
	public ProviderDTO findById(Long id) {
		Optional<Provider> obj = repository.findById(id);
		Provider entity = obj.orElseThrow(() -> new EntityNotFoundException("Entity not found"));
		return new ProviderDTO(entity);
	}

	@Transactional
	public ProviderDTO insert(ProviderDTO dto) {
		Provider entity = new Provider(null, dto.getName(), dto.getCpf(), dto.getCnpj(), dto.getActive(), null);
		entity = repository.save(entity);
		return new ProviderDTO(entity);
	}

	@Transactional
	public ProviderDTO update(Long id, ProviderDTO dto) {
		Provider entity = repository.getById(id);
		updateEntityWithDtoData(entity, dto);
		entity = repository.save(entity);
		return new ProviderDTO(entity);
	}
	
	private void updateEntityWithDtoData(Provider entity, ProviderDTO dto) {
		entity.setName(dto.getName());
		entity.setCpf(dto.getCpf());
		entity.setCnpj(dto.getCnpj());
	}
}
