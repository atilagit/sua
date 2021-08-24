package com.atmat.sua.dto;

import java.io.Serializable;

import com.atmat.sua.entities.Address;

public class AddressDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String street;
	private String number;
	private String neighborhood;
	private String complement;
	private String city;
	private String state;
	private String cep;
	
	public AddressDTO() {
	}

	public AddressDTO(Long id, String street, String number, String neighborhood, String complement, String city, String state, String cep) {
		this.id = id;
		this.street = street;
		this.number = number;
		this.neighborhood = neighborhood;
		this.complement = complement;
		this.city = city;
		this.state = state;
		this.cep = cep;
	}
	
	public AddressDTO(Address entity) {
		this.id = entity.getId();
		this.street = entity.getStreet();
		this.number = entity.getNumber();
		this.neighborhood = entity.getNeighborhood();
		this.complement = entity.getComplement();
		this.city = entity.getCity();
		this.state = entity.getState();
		this.cep = entity.getCep();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public String getNeighborhood() {
		return neighborhood;
	}

	public void setNeighborhood(String neighborhood) {
		this.neighborhood = neighborhood;
	}

	public String getComplement() {
		return complement;
	}

	public void setComplement(String complement) {
		this.complement = complement;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}
}
