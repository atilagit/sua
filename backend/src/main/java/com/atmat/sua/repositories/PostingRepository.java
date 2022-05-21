package com.atmat.sua.repositories;

import java.time.LocalDate;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.atmat.sua.entities.Client;
import com.atmat.sua.entities.Employee;
import com.atmat.sua.entities.Posting;
import com.atmat.sua.entities.Provider;

@Repository
public interface PostingRepository extends JpaRepository<Posting, Long>{

	@Query("SELECT obj FROM Posting obj WHERE "
			+ "(:employee IS NULL OR :employee = obj.employee) AND"
			+ "(:client IS NULL OR :client = obj.client) AND "
			+ "(:provider IS NULL OR :provider = obj.provider) AND "
			+ "(:resolved IS NULL OR :resolved = obj.resolved) AND "
			+ "(:de IS NULL OR obj.date BETWEEN :de AND :ate)")
	Page<Posting> find(Employee employee, Client client, Provider provider, Boolean resolved, LocalDate de, LocalDate ate, Pageable pageable);
}
