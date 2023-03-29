package com.example.fullstackbackend.service.student;

import com.example.fullstackbackend.model.student.Student;
import com.example.fullstackbackend.repository.IStudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    @Autowired
    IStudentRepository studentRepository;

    public List<Student> getStudentsByClass(Integer classId) {
        return studentRepository.getStudentByClazz(classId);
    }

    public Student addStudent(Student student) {
        return studentRepository.save(student);
    }

}
