package com.atmat.sua.dto;

import java.io.Serializable;

import com.atmat.sua.entities.Provider;

public class ProviderDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	private String cpf;
	private String cnpj;
	private Boolean active;
	
	public ProviderDTO() {
	}

	public ProviderDTO(Long id, String name, String cpf, String cnpj, Boolean active) {
		this.id = id;
		this.name = name;
		this.cpf = cpf;
		this.cnpj = cnpj;
		this.active = active;
	}
	
	public ProviderDTO(Provider entity) {
		this.id = entity.getId();
		this.name = entity.getName();
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
