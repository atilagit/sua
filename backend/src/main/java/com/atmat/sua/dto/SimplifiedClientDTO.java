package com.atmat.sua.dto;

import java.io.Serializable;
import java.util.Arrays;
import java.util.List;

import com.atmat.sua.entities.Client;

public class SimplifiedClientDTO implements Serializable, Comparable<SimplifiedClientDTO> {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String contact;
	private String abbreviatedName;
	
	public SimplifiedClientDTO() {
	}

	public SimplifiedClientDTO(Long id, String contact) {
		this.id = id;
		this.contact = buildSimplifiedContactName(contact);
	}
	
	public SimplifiedClientDTO(Client entity) {
		id = entity.getId();
		contact = buildMaxLengthName(entity.getContact());
		abbreviatedName = buildSimplifiedContactName(entity.getContact());
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
	
	private String buildMaxLengthName(String name) {
		int lengthOfName = name.trim().length();
		int maxLength = 40;
		if(lengthOfName > maxLength) {
			return name.substring(0, maxLength) + "...";
		}
		return name;
	}

	@Override
	public int compareTo(SimplifiedClientDTO o) {
		return contact.toLowerCase().compareTo(o.getContact().toLowerCase());
	}
}
