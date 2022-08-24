package com.atmat.sua.dto;

import java.io.Serializable;

import com.atmat.sua.entities.enums.UnitType;

public class UnitDTO implements Serializable, Comparable<UnitDTO> {
	private static final long serialVersionUID = 1L;

	private String value;
	private String label;

	public UnitDTO() {
	}

	public UnitDTO(String value, String label) {
		this.value = value;
		this.label = label;
	}

	public UnitDTO(UnitType unitTypeEnum) {
		value = unitTypeEnum.toString();
		label = unitTypeEnum.getDescription();
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String Label) {
		this.label = Label;
	}

	@Override
	public int compareTo(UnitDTO o) {
		return value.toLowerCase().compareTo(o.getValue().toLowerCase());
	}
}
