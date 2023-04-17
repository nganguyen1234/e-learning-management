package com.example.fullstackbackend.controller;

import com.example.fullstackbackend.model.address.City;
import com.example.fullstackbackend.model.address.Ethnicity;
import com.example.fullstackbackend.model.teacher.Faculty;
import com.example.fullstackbackend.service.CommonInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/common-info")
public class CommonInfoController {
    @Autowired
    private CommonInfoService commonInfoService;

    @GetMapping("/get-all-city")
    public List<City> getAllCity() {
        return commonInfoService.getAllCity();
    }

    @GetMapping("/get-all-faculty")
    public List<Faculty> getAllFaculty() {
        return commonInfoService.getAllFaculty();
    }

    @GetMapping("/get-all-ethnicity")
    public List<Ethnicity> getAllEthnicity(){
        return commonInfoService.getAllEthnicity();
    }
}
