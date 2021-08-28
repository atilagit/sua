package com.atmat.sua.dto;

import java.io.Serializable;

import com.atmat.sua.entities.Employee;

public class SimplifiedEmployeeDTO implements Serializable, Comparable<SimplifiedEmployeeDTO> {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;

	public SimplifiedEmployeeDTO() {
	}

	public SimplifiedEmployeeDTO(Long id, String name) {
		this.id = id;
		this.name = (name == null)? null : name.split(" ")[0];
	}

	public SimplifiedEmployeeDTO(Employee entity) {
		id = entity.getId();
		name = (entity.getName() == null)? null : entity.getName().split(" ")[0];
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
		this.name = (name == null)? null : name.split(" ")[0];
	}

	@Override
	public int compareTo(SimplifiedEmployeeDTO o) {
		return name.toLowerCase().compareTo(o.getName().toLowerCase());
	}
}
