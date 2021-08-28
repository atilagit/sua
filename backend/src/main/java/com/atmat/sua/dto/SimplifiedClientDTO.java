package com.atmat.sua.dto;

import java.io.Serializable;

import com.atmat.sua.entities.Client;

public class SimplifiedClientDTO implements Serializable, Comparable<SimplifiedClientDTO> {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String contact;
	
	public SimplifiedClientDTO() {
	}

	public SimplifiedClientDTO(Long id, String contact) {
		this.id = id;
		this.contact = (contact == null)? null : contact.split(" ")[0];
	}
	
	public SimplifiedClientDTO(Client entity) {
		id = entity.getId();
		contact = (entity.getContact() == null)? null : entity.getContact().split(" ")[0];
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
		this.contact = contact;
	}

	@Override
	public int compareTo(SimplifiedClientDTO o) {
		return contact.toLowerCase().compareTo(o.getContact().toLowerCase());
	}
}
