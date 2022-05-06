package com.atmat.sua.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.atmat.sua.entities.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long>{

}
