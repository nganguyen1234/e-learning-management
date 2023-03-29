package com.example.fullstackbackend.model.timeTable;

import com.example.fullstackbackend.model.clazz.Clazz;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Timetable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @OneToOne
    private Clazz clazz;
    @OneToMany
    private Set<Period> periodSet;
    @Column(columnDefinition = "boolean default false")
    private boolean isDeleted;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Clazz getClazz() {
        return clazz;
    }

    public void setClazz(Clazz clazz) {
        this.clazz = clazz;
    }

    public Set<Period> getPeriodSet() {
        return periodSet;
    }

    public void setPeriodSet(Set<Period> periodSet) {
        this.periodSet = periodSet;
    }

    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }
}
