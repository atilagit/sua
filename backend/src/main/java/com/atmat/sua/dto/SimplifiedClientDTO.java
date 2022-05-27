package com.atmat.sua.dto;

import java.io.Serializable;
import java.util.Arrays;
import java.util.List;

import com.atmat.sua.entities.Client;

public class SimplifiedClientDTO implements Serializable, Comparable<SimplifiedClientDTO> {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String contact;
	
	public SimplifiedClientDTO() {
	}

	public SimplifiedClientDTO(Long id, String contact) {
		this.id = id;
		this.contact = buildSimplifiedContactName(contact);
	}
	
	public SimplifiedClientDTO(Client entity) {
		id = entity.getId();
		contact = buildSimplifiedContactName(entity.getContact());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = buildSimplifiedContactName(contact);
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
	public int compareTo(SimplifiedClientDTO o) {
		return contact.toLowerCase().compareTo(o.getContact().toLowerCase());
	}
}
