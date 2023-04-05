package com.example.fullstackbackend.controller;

import com.example.fullstackbackend.model.clazz.Clazz;
import com.example.fullstackbackend.model.student.Student;
import com.example.fullstackbackend.service.student.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/student")
public class StudentController {

    @Autowired
    StudentService studentService;

    @GetMapping("/get-student-by-class/{id}")
    List<Student> searchStudentInClassByName(@PathVariable(name = "id") Integer classId,@RequestParam(name = "name",defaultValue = "") String name) {
        return studentService.searchStudentInClass(classId,name);
    }
//    @GetMapping("/get-student-by-class/{id}")
//    List<Student> getStudentsByClass(@PathVariable(name = "id") Integer classId) {
//        return studentService.getStudentByClass(classId);
//    }

    @PostMapping("/add-student-to-class")
    Student addStudent(@RequestBody Student student){
        return studentService.addStudent(student);
    }
//    @PostMapping("/get-student-by-class")
//    List<Student> getStudentsByClass(@RequestBody Clazz clazz) {
//        return studentService.getStudentsByClass(clazz.getId());
//    }

}
