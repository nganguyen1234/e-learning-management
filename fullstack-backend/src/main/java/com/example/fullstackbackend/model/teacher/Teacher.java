package com.example.fullstackbackend.model.teacher;

import com.example.fullstackbackend.model.clazz.Clazz;
import org.springframework.boot.context.properties.bind.DefaultValue;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String fullName;
    private String dateOfBirth;
    private String address;
    private String phoneNumber;
    private String placeOfOrigin;
    private boolean gender;
    @Column(columnDefinition = "boolean default false")
    private boolean isDeleted;
    @ManyToMany()
    private Set<Clazz> clazzSet;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public boolean isGender() {
        return gender;
    }

    public void setGender(boolean gender) {
        this.gender = gender;
    }

    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }

    public String getPlaceOfOrigin() {
        return placeOfOrigin;
    }

    public void setPlaceOfOrigin(String placeOfOrigin) {
        this.placeOfOrigin = placeOfOrigin;
    }

    public Set<Clazz> getClazzSet() {
        return clazzSet;
    }

    public void setClazzSet(Set<Clazz> clazzSet) {
        this.clazzSet = clazzSet;
    }
}
