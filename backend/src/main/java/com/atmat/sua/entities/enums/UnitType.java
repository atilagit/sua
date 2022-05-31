package com.atmat.sua.entities.enums;

public enum UnitType {

	KG("Kg"), 
	HOURS("hora(s)"), 
	DAY("diária"), 
	ADVANCE("adiantam.");

	private String description;
	
	UnitType(String description) {
		this.description = description;
	}
	
	public String getDescription() {
		return description;
	}
}
