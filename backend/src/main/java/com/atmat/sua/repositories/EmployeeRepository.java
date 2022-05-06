package com.atmat.sua.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.atmat.sua.entities.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

	Employee findByCpf(String cpf);

	Employee findByLogin(String login);
}
