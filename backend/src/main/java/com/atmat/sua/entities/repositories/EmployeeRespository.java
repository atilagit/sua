package com.atmat.sua.entities.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.atmat.sua.entities.Employee;

public interface EmployeeRespository extends JpaRepository<Employee, Long>{

}
