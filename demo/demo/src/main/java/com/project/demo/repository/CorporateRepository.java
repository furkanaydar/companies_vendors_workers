package com.project.demo.repository;

import com.project.demo.model.Corporate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CorporateRepository extends JpaRepository<Corporate, Long> {
    Corporate findCorporateByCorporateEmail(String corporateEmail);
    Corporate findCorporateByCorporateName(String corporateName);
}
