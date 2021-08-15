package com.atmat.sua.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.atmat.sua.dto.ProviderDTO;
import com.atmat.sua.services.ProviderService;

@RestController
@RequestMapping(value = "/providers")
public class ProviderResource {
	
	@Autowired
	ProviderService service;

	@GetMapping
	public ResponseEntity<List<ProviderDTO>> findAll(){
		List<ProviderDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<ProviderDTO> findById(@PathVariable Long id){
		ProviderDTO dto = service.findById(id);
		return ResponseEntity.ok().body(dto);
	}
}
