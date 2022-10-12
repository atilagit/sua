package com.atmat.sua.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.atmat.sua.entities.Employee;
import com.atmat.sua.repositories.EmployeeRepository;
import com.atmat.sua.services.exceptions.ForbiddenException;
import com.atmat.sua.services.exceptions.UnauthorizedException;

@Service
public class AuthService {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Transactional(readOnly = true)
	public Employee authenticated() {
		try {
			String username = SecurityContextHolder.getContext().getAuthentication().getName();
			return employeeRepository.findByLogin(username);
		} catch(Exception e) {
			throw new UnauthorizedException("Invalid user");
		}
	}

	public void validateSelfOrOperatorOrAdmin(Long userId) {
		Employee user = authenticated();
		if(user.getId().equals(userId) || user.hasHole("ROLE_ADMIN") || user.hasHole("ROLE_OPERATOR")) {
			return;
		}
		throw new ForbiddenException("Access denied");
	}
}
