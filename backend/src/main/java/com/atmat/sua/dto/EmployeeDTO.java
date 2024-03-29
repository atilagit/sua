package com.atmat.sua.dto;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.atmat.sua.entities.Employee;
import com.atmat.sua.services.validation.EmployeeValid;

@EmployeeValid
public class EmployeeDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	
	@NotBlank(message = "O campo não pode ser nulo ou vazio")
	private String name;
	private String abbreviatedName;
	
	@NotNull(message = "O campo não pode ser nulo")
	@Size(min = 11, max = 14, message = "Quantidade de dígitos inválida")
	private String cpf;
	private LocalDate admissionDate;
	
	@Size(min = 3, message = "O tamanho deve ser de no mínimo 3 caracteres")
	private String login;
	private Boolean active;
	
	Set<RoleDTO> roles = new HashSet<>();
	private AddressDTO address;

	public EmployeeDTO() {
	}

	public EmployeeDTO(Long id, String name, String cpf, LocalDate admissionDate, String login, Boolean active) {
		this.id = id;
		this.name = name;
		this.cpf = cpf;
		this.admissionDate = admissionDate;
		this.login = login;
		this.active = active;
	}

	public EmployeeDTO(Employee entity) {
		id = entity.getId();
		name = entity.getName();
		this.setAbbreviatedName(getAbbreviatedNameFromName(entity.getName()));
		cpf = entity.getCpf();
		admissionDate = entity.getAdmissionDate();
		login = entity.getLogin();
		active = entity.getActive();
		entity.getRoles().forEach(role -> this.roles.add(new RoleDTO(role)));
		this.address = (entity.getAddress() == null? null : (new AddressDTO(entity.getAddress())));
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public LocalDate getAdmissionDate() {
		return admissionDate;
	}

	public void setAdmissionDate(LocalDate admissionDate) {
		this.admissionDate = admissionDate;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}

	public Set<RoleDTO> getRoles() {
		return roles;
	}

	public AddressDTO getAddress() {
		return address;
	}

	public void setAddress(AddressDTO address) {
		this.address = address;
	}
	
	public String getAbbreviatedName() {
		return abbreviatedName;
	}
	
	public void setAbbreviatedName(String abbreviatedName) {
		this.abbreviatedName = abbreviatedName;
	}
	
	private String getAbbreviatedNameFromName(String name) {
		String[] fullName = name.trim().split(" ");
		if(fullName.length > 1) {
			return fullName[0] + " " + fullName[fullName.length - 1];
		}else {
			return name;
		}
	}
}
