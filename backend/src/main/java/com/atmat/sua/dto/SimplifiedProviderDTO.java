package com.atmat.sua.dto;

import java.io.Serializable;
import java.util.Arrays;
import java.util.List;

import com.atmat.sua.entities.Provider;

public class SimplifiedProviderDTO implements Serializable, Comparable<SimplifiedProviderDTO> {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	private String abbreviatedName;
	
	public SimplifiedProviderDTO() {
	}

	public SimplifiedProviderDTO(Long id, String name) {
		this.id = id;
		this.name = buildSimplifiedContactName(name);
	}
	
	public SimplifiedProviderDTO(Provider entity) {
		id = entity.getId();
		name = buildMaxLengthName(entity.getName());
		abbreviatedName = buildSimplifiedContactName(entity.getName());
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
		this.name = buildSimplifiedContactName(name);
	}
	
	public String getAbbreviatedName() {
		return abbreviatedName;
	}
	
	public void setAbbreviatedName(String abbreviatedName) {
		this.abbreviatedName = abbreviatedName;
	}
	
	private String buildSimplifiedContactName(String name) {
		List<String> words = Arrays.asList(name.split(" "));
		String firstName = words.get(0);
		if (words.size() > 1 && firstName.length() <= 10) {
			String lastName = words.get(words.size() - 1);
			return firstName + " " + lastName.charAt(0) + ".";
		}
		return (firstName.length() > 10) ? firstName.substring(0, 10) + "..." : firstName;
	}

	@Override
	public int compareTo(SimplifiedProviderDTO o) {
		return name.toLowerCase().compareTo(o.getName().toLowerCase());
	}
	
	private String buildMaxLengthName(String name) {
		int lengthOfName = name.trim().length();
		int maxLength = 40;
		if(lengthOfName > maxLength) {
			return name.substring(0, maxLength) + "...";
		}
		return name;
	}
}
