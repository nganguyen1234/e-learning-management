package com.example.fullstackbackend.dto.teacher;

import com.example.fullstackbackend.model.address.City;
import com.example.fullstackbackend.model.address.Ethnicity;
import com.example.fullstackbackend.model.clazz.Clazz;
import com.example.fullstackbackend.model.teacher.Faculty;
import com.example.fullstackbackend.model.user.User;

public class TeacherDto {
    private Integer id;
    private String fullName;
    private String dateOfBirth;
    private String idCardNumber;
    private String address;
    private String phoneNumber;
    private String emailAddress;
    private Ethnicity ethnicity;
    private City placeOfOrigin;
    private boolean gender;
    private boolean isDeleted;
    private Faculty faculty;
    private User user;
    private Clazz monitoredClass;

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

    public String getIdCardNumber() {
        return idCardNumber;
    }

    public void setIdCardNumber(String idCardNumber) {
        this.idCardNumber = idCardNumber;
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

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public Ethnicity getEthnicity() {
        return ethnicity;
    }

    public void setEthnicity(Ethnicity ethnicity) {
        this.ethnicity = ethnicity;
    }

    public City getPlaceOfOrigin() {
        return placeOfOrigin;
    }

    public void setPlaceOfOrigin(City placeOfOrigin) {
        this.placeOfOrigin = placeOfOrigin;
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

    public Faculty getFaculty() {
        return faculty;
    }

    public void setFaculty(Faculty faculty) {
        this.faculty = faculty;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Clazz getMonitoredClass() {
        return monitoredClass;
    }

    public void setMonitoredClass(Clazz monitoredClass) {
        this.monitoredClass = monitoredClass;
    }
}
