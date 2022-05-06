package com.atmat.sua.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.atmat.sua.entities.Posting;

@Repository
public interface PostingRepository extends JpaRepository<Posting, Long>{

}
