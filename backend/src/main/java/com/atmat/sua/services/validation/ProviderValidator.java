package com.atmat.sua.services.validation;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerMapping;

import com.atmat.sua.dto.ProviderDTO;
import com.atmat.sua.entities.Provider;
import com.atmat.sua.repositories.ProviderRepository;
import com.atmat.sua.resources.exceptions.FieldMessage;

public class ProviderValidator implements ConstraintValidator<ProviderValid, ProviderDTO> {
	
	@Autowired
	private HttpServletRequest request;
	
	@Autowired
	private ProviderRepository providerRepository;
	
	@Override
	public void initialize(ProviderValid ann) {
	}

	@Override
	public boolean isValid(ProviderDTO dto, ConstraintValidatorContext context) {
		
		@SuppressWarnings("unchecked")
		var uriVars = (Map<String, String>) request.getAttribute(HandlerMapping.URI_TEMPLATE_VARIABLES_ATTRIBUTE);
		Long providerId = (uriVars.get("id") == null)? null : Long.parseLong(uriVars.get("id"));
		
		
		List<FieldMessage> list = new ArrayList<>();
		
		Provider providerWithCpf = providerRepository.findByCpf(dto.getCpf());
		if(providerWithCpf != null && providerId != providerWithCpf.getId()) {
			list.add(new FieldMessage("cpf", "Já existe no banco de dados"));
		}
		
		Provider providerWithCnpj = providerRepository.findByCnpj(dto.getCnpj());
		if(providerWithCnpj != null && providerId != providerWithCnpj.getId()) {
			list.add(new FieldMessage("cnpj", "Já existe no banco de dados"));
		}
		
		for (FieldMessage e : list) {
			context.disableDefaultConstraintViolation();
			context.buildConstraintViolationWithTemplate(e.getMessage()).addPropertyNode(e.getFieldName())
					.addConstraintViolation();
		}
		return list.isEmpty();
	}
}
