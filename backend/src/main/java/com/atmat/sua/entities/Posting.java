package com.atmat.sua.entities;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.atmat.sua.entities.enums.UnitType;

@Entity
@Table(name = "tb_posting")
public class Posting implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private LocalDate date;
	private UnitType unit;
	private Double quantity;
	private BigDecimal price;
	private String note;
	private Boolean salaryAdvance;
	private Boolean resolved;
	
	@ManyToOne
	@JoinColumn(name = "employee_id")
	private Employee employee;
	
	@ManyToOne
	@JoinColumn(name = "provider_id")
	private Provider provider;
	
	@ManyToOne
	@JoinColumn(name = "client_id")
	private Client client;
	
	public Posting() {
	}

	public Posting(Long id, LocalDate date, UnitType unit, Double quantity, BigDecimal price, String note,
			Boolean salaryAdvance, Boolean resolved) {
		super();
		this.id = id;
		this.date = date;
		this.unit = unit;
		this.quantity = quantity;
		this.price = price;
		this.note = note;
		this.salaryAdvance = salaryAdvance;
		this.resolved = resolved;
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

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	public Provider getProvider() {
		return provider;
	}

	public void setProvider(Provider provider) {
		this.provider = provider;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Posting other = (Posting) obj;
		return Objects.equals(id, other.id);
	}
}
