package com.example.fullstackbackend.service.clazz;

import com.example.fullstackbackend.model.clazz.Clazz;
import com.example.fullstackbackend.repository.clazz.IClassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClassService {
    @Autowired
    private IClassRepository classRepository;

    public List<Clazz> get1stGrade() {
        return classRepository.find1stGrade();
    }

    public Clazz addClass(Clazz clazz) {
        return classRepository.save(clazz);
    }

    public List<Clazz> getAllClass() {
        return classRepository.findAll();
    }

    public Clazz getClassById(Integer id) {
        return classRepository.findById(id).orElse(null);
    }
}
