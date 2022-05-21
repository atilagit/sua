package com.atmat.sua.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.atmat.sua.dto.PostingDTO;
import com.atmat.sua.entities.Employee;
import com.atmat.sua.entities.Posting;
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

	@Transactional(readOnly = true)
	public Page<PostingDTO> findAllPaged(Long employeeId, PageRequest pageRequest){
		Employee employee = (employeeId != 0) ? employeeRepository.getOne(employeeId) : null;
		Page<Posting> list = repository.find(employee, pageRequest);
		return list.map(x -> new PostingDTO(x));
	}

	@Transactional(readOnly = true)
	public PostingDTO findById(Long id) {
		Optional<Posting> obj = repository.findById(id);
		Posting entity = obj.orElseThrow(() -> new ResourceNotFoundException(Posting.class.getSimpleName() + " not found"));
		return new PostingDTO(entity);
	}

	@Transactional
	public PostingDTO insert(PostingDTO dto) {
		Posting entity = new Posting(null, dto.getDate(), dto.getUnit(), dto.getQuantity(), dto.getPrice(), dto.getNote(), dto.getSalaryAdvance(), dto.getResolved());
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
		entity.setUnit(dto.getUnit());
		copyEmployeeAndClientAndProviderFromDtoToEntity(dto, entity);
	}
	
	private void copyEmployeeAndClientAndProviderFromDtoToEntity(PostingDTO dto, Posting entity) {
		entity.setEmployee(employeeRepository.getOne(dto.getEmployee().getId()));
		if(dto.getClient() != null) {
			entity.setClient(clientRepository.getOne(dto.getClient().getId()));
		}
		if(dto.getProvider() != null) {
			entity.setProvider(providerRepository.getOne(dto.getProvider().getId()));
		}
	}
}
