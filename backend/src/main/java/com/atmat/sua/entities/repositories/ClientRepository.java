package com.atmat.sua.entities.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.atmat.sua.entities.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long>{

	Client findByCpf(String cpf);
	
	Client findByCnpj(String cnpj);
}
