package com.atmat.sua.dto;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;

import javax.validation.constraints.NotNull;

import com.atmat.sua.entities.Posting;
import com.atmat.sua.entities.enums.UnitType;

public class PostingDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	
	@NotNull
	private LocalDate date;
	
	@NotNull
	private UnitType unit;
	
	@NotNull
	private Double quantity;
	
	@NotNull
	private BigDecimal price;
	private String note;
	
	@NotNull
	private Boolean salaryAdvance;
	private Boolean resolved;
	
	@NotNull
	private SimplifiedEmployeeDTO employee;
	private SimplifiedClientDTO client;
	private SimplifiedProviderDTO provider;
	
	public PostingDTO() {
	}

	public PostingDTO(Long id, LocalDate date, UnitType unit, Double quantity, BigDecimal price, String note,
			Boolean salaryAdvance, Boolean resolved, SimplifiedEmployeeDTO employee, SimplifiedClientDTO client, SimplifiedProviderDTO provider) {
		this.id = id;
		this.date = date;
		this.unit = unit;
		this.quantity = quantity;
		this.price = price;
		this.note = note;
		this.salaryAdvance = salaryAdvance;
		this.resolved = (resolved == null)? false : resolved;
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
		resolved = (entity.getResolved() == null)? false : entity.getResolved();
		employee = new SimplifiedEmployeeDTO(entity.getEmployee());
		client = (entity.getClient() != null) ? new SimplifiedClientDTO(entity.getClient()) : new SimplifiedClientDTO();
		provider = (entity.getProvider() != null) ? new SimplifiedProviderDTO(entity.getProvider()) : new SimplifiedProviderDTO();
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

	public SimplifiedEmployeeDTO getEmployee() {
		return employee;
	}

	public void setEmployee(SimplifiedEmployeeDTO employee) {
		this.employee = employee;
	}

	public SimplifiedClientDTO getClient() {
		return client;
	}

	public void setClient(SimplifiedClientDTO client) {
		this.client = client;
	}

	public SimplifiedProviderDTO getProvider() {
		return provider;
	}

	public void setProvider(SimplifiedProviderDTO provider) {
		this.provider = provider;
	}
}
