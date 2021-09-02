package com.atmat.sua.services.validation;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerMapping;

import com.atmat.sua.dto.EmployeeDTO;
import com.atmat.sua.entities.Employee;
import com.atmat.sua.entities.repositories.EmployeeRepository;
import com.atmat.sua.resources.exceptions.FieldMessage;

public class EmployeeValidator implements ConstraintValidator<EmployeeValid, EmployeeDTO> {
	
	@Autowired
	private HttpServletRequest request;
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Override
	public void initialize(EmployeeValid ann) {
	}

	@Override
	public boolean isValid(EmployeeDTO dto, ConstraintValidatorContext context) {
		
		@SuppressWarnings("unchecked")
		var uriVars = (Map<String, String>) request.getAttribute(HandlerMapping.URI_TEMPLATE_VARIABLES_ATTRIBUTE);
		Long employeeId = (uriVars.get("id") == null)? null : Long.parseLong(uriVars.get("id"));
		
		
		List<FieldMessage> list = new ArrayList<>();
		
		Employee employeeWithCpf = employeeRepository.findByCpf(dto.getCpf());
		if(employeeWithCpf != null && employeeId != employeeWithCpf.getId()) {
			list.add(new FieldMessage("cpf", "Já existe no banco de dados"));
		}
		
		Employee employeeWithLogin = employeeRepository.findByLogin(dto.getLogin());
		if(employeeWithLogin != null && employeeId != employeeWithLogin.getId()) {
			list.add(new FieldMessage("login", "Já existe no banco de dados"));
		}
		
		for (FieldMessage e : list) {
			context.disableDefaultConstraintViolation();
			context.buildConstraintViolationWithTemplate(e.getMessage()).addPropertyNode(e.getFieldName())
					.addConstraintViolation();
		}
		return list.isEmpty();
	}
}
