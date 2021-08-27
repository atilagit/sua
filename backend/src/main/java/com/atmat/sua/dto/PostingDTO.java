package com.atmat.sua.dto;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;

import com.atmat.sua.entities.Posting;
import com.atmat.sua.entities.enums.UnitType;

public class PostingDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private LocalDate date;
	private UnitType unit;
	private Double quantity;
	private BigDecimal price;
	private String note;
	private Boolean salaryAdvance;
	private Boolean resolved;
	
	private EmployeeDTO employee;
	private ClientDTO client;
	private ProviderDTO provider;
	
	public PostingDTO() {
	}

	public PostingDTO(Long id, LocalDate date, UnitType unit, Double quantity, BigDecimal price, String note,
			Boolean salaryAdvance, Boolean resolved, EmployeeDTO employee, ClientDTO client, ProviderDTO provider) {
		this.id = id;
		this.date = date;
		this.unit = unit;
		this.quantity = quantity;
		this.price = price;
		this.note = note;
		this.salaryAdvance = salaryAdvance;
		this.resolved = resolved;
		this.employee = employee;
		this.client = client;
		this.provider = provider;
	}
	
	public PostingDTO(Posting entity) {
		id = entity.getId();
		date = entity.getDate();
		unit = entity.getUnit();
		quantity = entity.getQuantity();
		price = entity.getPrice();
		note = entity.getNote();
		salaryAdvance = entity.getSalaryAdvance();
		resolved = entity.getResolved();
		employee = new EmployeeDTO(entity.getEmployee());
		if (entity.getClient() != null) client = new ClientDTO(entity.getClient());
		if (entity.getProvider() != null) provider = new ProviderDTO(entity.getProvider());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public UnitType getUnit() {
		return unit;
	}

	public void setUnit(UnitType unit) {
		this.unit = unit;
	}

	public Double getQuantity() {
		return quantity;
	}

	public void setQuantity(Double quantity) {
		this.quantity = quantity;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public Boolean getSalaryAdvance() {
		return salaryAdvance;
	}

	public void setSalaryAdvance(Boolean salaryAdvance) {
		this.salaryAdvance = salaryAdvance;
	}

	public Boolean getResolved() {
		return resolved;
	}

	public void setResolved(Boolean resolved) {
		this.resolved = resolved;
	}

	public EmployeeDTO getEmployee() {
		return employee;
	}

	public void setEmployee(EmployeeDTO employee) {
		this.employee = employee;
	}

	public ClientDTO getClient() {
		return client;
	}

	public void setClient(ClientDTO client) {
		this.client = client;
	}

	public ProviderDTO getProvider() {
		return provider;
	}

	public void setProvider(ProviderDTO provider) {
		this.provider = provider;
	}
}
