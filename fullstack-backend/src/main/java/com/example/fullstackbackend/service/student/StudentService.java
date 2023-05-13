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

    public List<Student> searchStudentInClass(Integer classId,String name) {
        return studentRepository.searchStudentInClass(classId,name);
    }

    public List<Student> getStudentByClass(Integer classId){
        return studentRepository.getStudentByClazz(classId);
    }

    public Student addStudent(Student student) {
        return studentRepository.save(student);
    }

    public Student getPersonalInformation(Integer id){
        return studentRepository.findById(id).orElse(null);
    }

    public Student updateStudentInformation(Student student){
        return studentRepository.save(student);
    }
}
