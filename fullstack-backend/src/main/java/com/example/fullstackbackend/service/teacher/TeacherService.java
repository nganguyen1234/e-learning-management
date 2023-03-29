package com.example.fullstackbackend.service.teacher;

import com.example.fullstackbackend.model.teacher.Teacher;
import com.example.fullstackbackend.repository.teacher.ITeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TeacherService {

    @Autowired
    private ITeacherRepository teacherRepository;

    public List<Teacher> getAllTeachers() {
        List<Teacher> teacherList = teacherRepository.findAll();
        return teacherList;
    }

    public List<Teacher> searchTeacher(String name) {
        List<Teacher> teacherList = teacherRepository.findByFullName(name);
        return teacherList;
    }

    public Teacher addTeacher(Teacher teacher){
        return teacherRepository.save(teacher);
    }

    public Teacher editTeacher(Teacher teacher){
        return teacherRepository.save(teacher);
    }

    public Teacher findById(Integer id){
        return teacherRepository.findById(id).orElse(new Teacher());
    }

}
