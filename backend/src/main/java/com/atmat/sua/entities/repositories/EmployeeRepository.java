package com.atmat.sua.entities.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.atmat.sua.entities.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
