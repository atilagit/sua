package com.atmat.sua.dto;

import java.io.Serializable;

import com.atmat.sua.entities.Client;

public class ClientDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String contact;
	private String corporateName;
	private String cpf;
	private String cnpj;
	private Boolean active;
	
	public ClientDTO() {
	}

	public ClientDTO(Long id, String contact, String corporateName, String cpf, String cnpj, Boolean active) {
		this.id = id;
		this.contact = contact;
		this.corporateName = corporateName;
		this.cpf = cpf;
		this.cnpj = cnpj;
		this.active = active;
	}
	
	public ClientDTO(Client entity) {
		this.id = entity.getId();
		this.contact = entity.getContact();
		this.corporateName = entity.getCorporateName();
		this.cpf = entity.getCpf();
		this.cnpj = entity.getCnpj();
		this.active = entity.getActive();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getCorporateName() {
		return corporateName;
	}

	public void setCorporateName(String corporateName) {
		this.corporateName = corporateName;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}
}
