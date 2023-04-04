package com.example.fullstackbackend.model.student;

import com.example.fullstackbackend.model.address.City;
import com.example.fullstackbackend.model.clazz.Clazz;

import javax.persistence.*;

@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String fullName;
    private String photo;
    private String dateOfBirth;
    private boolean gender;
//    private String placeOfOrigin;
    @ManyToOne
    private City placeOfOrigin;
    private String ethnicGroup;
    private String religion;
    private String dadName;
    private String dadJob;
    private String momName;
    private String momJob;
    @Column(columnDefinition = "boolean default true")
    private boolean status;
    @Column(columnDefinition = "boolean default false")
    private boolean isDeleted;
    @ManyToOne
    private Clazz clazz;

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

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public boolean isGender() {
        return gender;
    }

    public void setGender(boolean gender) {
        this.gender = gender;
    }

//    public String getPlaceOfOrigin() {
//        return placeOfOrigin;
//    }
//
//    public void setPlaceOfOrigin(String placeOfOrigin) {
//        this.placeOfOrigin = placeOfOrigin;
//    }

    public City getPlaceOfOrigin() {
        return placeOfOrigin;
    }

    public void setPlaceOfOrigin(City placeOfOrigin) {
        this.placeOfOrigin = placeOfOrigin;
    }

    public String getEthnicGroup() {
        return ethnicGroup;
    }

    public void setEthnicGroup(String ethnicGroup) {
        this.ethnicGroup = ethnicGroup;
    }

    public String getReligion() {
        return religion;
    }

    public void setReligion(String religion) {
        this.religion = religion;
    }

    public String getDadName() {
        return dadName;
    }

    public void setDadName(String dadName) {
        this.dadName = dadName;
    }

    public String getDadJob() {
        return dadJob;
    }

    public void setDadJob(String dadJob) {
        this.dadJob = dadJob;
    }

    public String getMomName() {
        return momName;
    }

    public void setMomName(String momName) {
        this.momName = momName;
    }

    public String getMomJob() {
        return momJob;
    }

    public void setMomJob(String momJob) {
        this.momJob = momJob;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }

    public Clazz getClazz() {
        return clazz;
    }

    public void setClazz(Clazz clazz) {
        this.clazz = clazz;
    }
}
