package com.atmat.sua.resources;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.atmat.sua.dto.PostingDTO;
import com.atmat.sua.services.PostingService;

@RestController
@RequestMapping(value = "/postings")
public class PostingResource {
	
	@Autowired
	PostingService service;

	@GetMapping
	public ResponseEntity<Page<PostingDTO>> findAll(
			@RequestParam(value = "employeeId", defaultValue = "0") Long employeeId,
			@RequestParam(value = "clientId", defaultValue = "0") Long clientId,
			@RequestParam(value = "providerId", defaultValue = "0") Long providerId,
			@Param(value = "resolved") Boolean resolved,
			@Param(value = "from") String from,
			@Param(value = "to") String to,
			@RequestParam(value = "exclusionList", defaultValue = "0") long[] exclusionList,
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "20") Integer linesPerPage,
			@RequestParam(value = "direction", defaultValue = "DESC") String direction,
			@RequestParam(value = "orderBy", defaultValue = "date") String orderBy
			){
		
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
				
		Page<PostingDTO> list = service.findAllPaged(employeeId, clientId, providerId, resolved, from, to, exclusionList, pageRequest);
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<PostingDTO> findById(@PathVariable Long id){
		PostingDTO dto = service.findById(id);
		return ResponseEntity.ok().body(dto);
	}
	
	@PostMapping
	public ResponseEntity<PostingDTO> insert(@Valid @RequestBody PostingDTO dto){
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<PostingDTO> update(@PathVariable Long id, @Valid @RequestBody PostingDTO dto){
		dto = service.update(id, dto);
		return ResponseEntity.ok().body(dto);
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id){
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
}
