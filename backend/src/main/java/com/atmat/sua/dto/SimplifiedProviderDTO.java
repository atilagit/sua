package com.atmat.sua.dto;

import java.io.Serializable;
import java.util.Arrays;
import java.util.List;

import com.atmat.sua.entities.Provider;

public class SimplifiedProviderDTO implements Serializable, Comparable<SimplifiedProviderDTO> {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	
	public SimplifiedProviderDTO() {
	}

	public SimplifiedProviderDTO(Long id, String name) {
		this.id = id;
		this.name = buildSimplifiedContactName(name);
	}
	
	public SimplifiedProviderDTO(Provider entity) {
		id = entity.getId();
		name = buildSimplifiedContactName(entity.getName());
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
	
	private String buildSimplifiedContactName(String name) {
		List<String> words = Arrays.asList(name.split(" "));
		if (words.size() > 1) {
			return words.get(0) 
					+ " " 
					+ words.get(words.size() - 1).charAt(0)
					+ ".";
		} else {
			return words.get(0);
		}
	}

	@Override
	public int compareTo(SimplifiedProviderDTO o) {
		return name.toLowerCase().compareTo(o.getName().toLowerCase());
	}
}
