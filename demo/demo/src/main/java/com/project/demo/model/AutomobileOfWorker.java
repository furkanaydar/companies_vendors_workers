package com.project.demo.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "automobiles_workers")
public class AutomobilesOfWorker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long automobileOfWorkerId;
    @ManyToOne
    @JoinColumn(name = "automobile_id")
    Automobile automobile;

    @ManyToOne
    @JoinColumn(name = "worker_id")
    Worker worker;

    public AutomobilesOfWorker(Automobile automobile, Worker worker) {
        this.automobile = automobile;
        this.worker = worker;
    }
}
