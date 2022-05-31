package com.atmat.sua.services.validation;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerMapping;

import com.atmat.sua.dto.ClientDTO;
import com.atmat.sua.entities.Client;
import com.atmat.sua.repositories.ClientRepository;
import com.atmat.sua.resources.exceptions.FieldMessage;

public class ClientValidator implements ConstraintValidator<ClientValid, ClientDTO> {
	
	@Autowired
	private HttpServletRequest request;
	
	@Autowired
	private ClientRepository clientRepository;
	
	@Override
	public void initialize(ClientValid ann) {
	}

	@Override
	public boolean isValid(ClientDTO dto, ConstraintValidatorContext context) {
		
		@SuppressWarnings("unchecked")
		var uriVars = (Map<String, String>) request.getAttribute(HandlerMapping.URI_TEMPLATE_VARIABLES_ATTRIBUTE);
		Long clientId = (uriVars.get("id") == null)? null : Long.parseLong(uriVars.get("id"));
		
		
		List<FieldMessage> list = new ArrayList<>();
		
		if (dto.getCpf() != null && dto.getCpf().trim() != "") {
			Client clientWithCpf = clientRepository.findByCpf(dto.getCpf());
			if(clientWithCpf != null && clientId != clientWithCpf.getId()) {
				list.add(new FieldMessage("cpf", "Já existe no banco de dados"));
			}
		}
		
		if (dto.getCnpj() != null && dto.getCnpj().trim() != "") {
			Client clientWithCnpj = clientRepository.findByCnpj(dto.getCnpj());
			if(clientWithCnpj != null && clientId != clientWithCnpj.getId()) {
				list.add(new FieldMessage("cnpj", "Já existe no banco de dados"));
			}
		}
		
		for (FieldMessage e : list) {
			context.disableDefaultConstraintViolation();
			context.buildConstraintViolationWithTemplate(e.getMessage()).addPropertyNode(e.getFieldName())
					.addConstraintViolation();
		}
		return list.isEmpty();
	}
}
