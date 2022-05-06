package com.atmat.sua.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.atmat.sua.entities.Provider;

@Repository
public interface ProviderRepository extends JpaRepository<Provider, Long>{

	Provider findByCpf(String cpf);
	
	Provider findByCnpj(String cnpj);
}
