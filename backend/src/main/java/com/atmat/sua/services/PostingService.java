package com.atmat.sua.services;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.atmat.sua.dto.PostingDTO;
import com.atmat.sua.entities.Client;
import com.atmat.sua.entities.Employee;
import com.atmat.sua.entities.Posting;
import com.atmat.sua.entities.Provider;
import com.atmat.sua.entities.enums.UnitType;
import com.atmat.sua.repositories.ClientRepository;
import com.atmat.sua.repositories.EmployeeRepository;
import com.atmat.sua.repositories.PostingRepository;
import com.atmat.sua.repositories.ProviderRepository;
import com.atmat.sua.services.exceptions.DatabaseException;
import com.atmat.sua.services.exceptions.ResourceNotFoundException;

@Service
public class PostingService {
	
	@Autowired
	private PostingRepository repository;
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Autowired
	private ClientRepository clientRepository;
	
	@Autowired
	private ProviderRepository providerRepository;
	
	@Autowired
	private AuthService authService;

	@Transactional(readOnly = true)
	public Page<PostingDTO> findAllPaged(Long employeeId, Long clientId, Long providerId, Boolean resolved, 
			String from, String to, long[] exclusionList, PageRequest pageRequest){
		
		Employee employee;
		Client client = (clientId != 0) ? clientRepository.getOne(clientId) : null;
		Provider provider = (providerId != 0) ? providerRepository.getOne(providerId) : null;
		LocalDate de = ((from != null) && (!from.equals(""))) ? LocalDate.parse(from) : null;
		LocalDate ate = ((to != null) && (!to.equals(""))) ?  LocalDate.parse(to) : null;
		List<Long> listOfId = (ArrayList<Long>) Arrays.stream(exclusionList).boxed().collect(Collectors.toList());
		
		if (authService.isOperatorOrAdmin()) {
			employee = (employeeId != 0) ? employeeRepository.getOne(employeeId) : null;
		} else {
			employee = authService.authenticated();
		}
		
		Page<Posting> page = repository.find(employee, client, provider, resolved, de, ate, listOfId, pageRequest);
		return page.map(x -> new PostingDTO(x));
	}

	@Transactional(readOnly = true)
	public PostingDTO findById(Long id) {
		Optional<Posting> obj = repository.findById(id);
		Posting entity = obj.orElseThrow(() -> new ResourceNotFoundException(Posting.class.getSimpleName() + " not found"));
		return new PostingDTO(entity);
	}

	@Transactional
	public PostingDTO insert(PostingDTO dto) {
		Boolean resolved = (dto.getResolved() != null ? dto.getResolved() : false);
		Posting entity = new Posting(null, dto.getDate(), UnitType.valueOf(dto.getUnit().getValue()), dto.getQuantity(), dto.getPrice(), dto.getNote(), dto.getSalaryAdvance(), resolved);
		copyEmployeeAndClientAndProviderFromDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new PostingDTO(entity);
	}


	@Transactional
	public PostingDTO update(Long id, PostingDTO dto) {
		try {
			Posting entity = repository.getOne(id);
			updateEntityWithDtoData(entity, dto);
			entity = repository.save(entity);
			return new PostingDTO(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id " + id + " not found");
		}
	}
	
	@Transactional
	public PostingDTO invertResolvedStatus(Long id) {
		try {
			Posting entity = repository.getOne(id);
			entity.setResolved(!entity.getResolved());
			entity = repository.save(entity);
			return new PostingDTO(entity);
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
	
	private void updateEntityWithDtoData(Posting entity, PostingDTO dto) {
		entity.setDate(dto.getDate());
		entity.setNote(dto.getNote());
		entity.setPrice(dto.getPrice());
		entity.setQuantity(dto.getQuantity());
		entity.setSalaryAdvance(dto.getSalaryAdvance());
		entity.setUnit(UnitType.valueOf(dto.getUnit().getValue()));
		copyEmployeeAndClientAndProviderFromDtoToEntity(dto, entity);
	}
	
	private void copyEmployeeAndClientAndProviderFromDtoToEntity(PostingDTO dto, Posting entity) {
		entity.setEmployee(employeeRepository.getOne(dto.getEmployee().getId()));
		if(dto.getClient() != null && dto.getClient().getId() != null) {
			entity.setClient(clientRepository.getOne(dto.getClient().getId()));
		}
		if(dto.getProvider() != null && dto.getProvider().getId() != null) {
			entity.setProvider(providerRepository.getOne(dto.getProvider().getId()));
		}
	}
}
