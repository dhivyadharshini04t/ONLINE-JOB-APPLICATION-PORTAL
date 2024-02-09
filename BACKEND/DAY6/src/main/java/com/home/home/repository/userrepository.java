package com.home.home.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.home.home.model.Usermodel;

@Repository
public interface userrepository extends JpaRepository<Usermodel, Long> {
    Usermodel findByname(String name);
    void deleteByname(String name);
    // Other methods...
}
