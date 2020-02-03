package com.project.demo.repository;

import com.project.demo.model.Automobile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AutomobileRepository extends JpaRepository<Automobile, Long> {
    List<Automobile> findAutomobileByCorporate(Long corporateId);
}
