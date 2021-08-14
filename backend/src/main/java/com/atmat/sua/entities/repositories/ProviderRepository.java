package com.atmat.sua.entities.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.atmat.sua.entities.Provider;

@Repository
public interface ProviderRepository extends JpaRepository<Provider, Long>{

}
