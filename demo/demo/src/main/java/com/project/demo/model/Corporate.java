package com.project.demo.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "corporates")
public class Corporate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long corporateId;

    @NotBlank
    private String corporateName;

    @Column(length = 128, nullable = false)
    private String encrytedPassword;

    @NotBlank
    private String corporateEmail;


    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "corporate_vendors",
            joinColumns = { @JoinColumn(name = "corporate_id") },
            inverseJoinColumns = { @JoinColumn(name = "vendor_id") })
    private Set<Automobile> corporateVendors = new HashSet<>();

}
