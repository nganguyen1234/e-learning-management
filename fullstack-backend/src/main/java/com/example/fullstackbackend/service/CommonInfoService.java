package com.example.fullstackbackend.service;

import com.example.fullstackbackend.model.address.City;
import com.example.fullstackbackend.model.address.Ethnicity;
import com.example.fullstackbackend.model.teacher.Faculty;
import com.example.fullstackbackend.repository.commonInfoRepository.IAddressRepository;
import com.example.fullstackbackend.repository.commonInfoRepository.IEthnicityRepository;
import com.example.fullstackbackend.repository.commonInfoRepository.IFacultyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommonInfoService {
    @Autowired
    private IAddressRepository addressRepository;

    @Autowired
    private IFacultyRepository facultyRepository;

    @Autowired
    private IEthnicityRepository ethnicityRepository;

    public List<City> getAllCity() {
        return addressRepository.findAll();
    }

    public List<Faculty> getAllFaculty() {
        return facultyRepository.findAll();
    }

//    public Faculty findFacultyById(Integer id){
//        return facultyRepository.findById(id).orElse(null);
//    }

    public List<Ethnicity> getAllEthnicity() {
        return ethnicityRepository.findAll();
    }
}
