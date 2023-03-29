package com.example.fullstackbackend.controller;

import com.example.fullstackbackend.model.clazz.Clazz;
import com.example.fullstackbackend.service.clazz.ClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/class")
public class ClassController {

    @Autowired
    private ClassService classService;

    @GetMapping("/get-first-grade-list")
    List<Clazz> get1stGrade() {
        return classService.get1stGrade();
    }
}
