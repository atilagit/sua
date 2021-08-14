package com.atmat.sua.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.atmat.sua.dto.ProviderDTO;
import com.atmat.sua.entities.Provider;
import com.atmat.sua.entities.repositories.ProviderRepository;

@Service
public class ProviderService {
	
	@Autowired
	private ProviderRepository repository;

	public List<ProviderDTO> findAll(){
		List<Provider> list = repository.findAll();
		return list.stream().map(x -> new ProviderDTO(x)).collect(Collectors.toList());
	}
	
}
