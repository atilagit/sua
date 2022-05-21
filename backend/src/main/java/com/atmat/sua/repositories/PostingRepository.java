package com.atmat.sua.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.atmat.sua.entities.Employee;
import com.atmat.sua.entities.Posting;

@Repository
public interface PostingRepository extends JpaRepository<Posting, Long>{

	@Query("SELECT obj FROM Posting obj WHERE "
			+ "(:employee IS NULL OR :employee = obj.employee)")
	Page<Posting> find(Employee employee, Pageable pageable);
}
