package com.example.fullstackbackend.controller;

import com.example.fullstackbackend.model.teacher.Faculty;
import com.example.fullstackbackend.model.teacher.Teacher;
import com.example.fullstackbackend.model.teacher.TeacherDto;
import com.example.fullstackbackend.service.teacher.TeacherService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/teacher")
public class TeacherController {
    @Autowired
    private TeacherService teacherService;

    @GetMapping("/get-all-teacher")
    List<Teacher> getAllTeacher() {
        List<Teacher> teacherList = teacherService.getAllTeachers();
        return teacherList;
    }

    @PostMapping("/add-teacher")
    Teacher addTeacher(@RequestBody TeacherDto teacherDto) {
        Teacher teacher = new Teacher();
        BeanUtils.copyProperties(teacherDto, teacher);
        return teacherService.addTeacher(teacher);
    }

//    @PostMapping("/search-teacher")
//    List<Teacher> searchTeacher(@RequestBody String fullName, @RequestBody Faculty faculty){
//        return teacherService.searchTeacher(fullName,faculty);
//    }

    @GetMapping("/search-teacher")
    List<Teacher> searchTeacher(@RequestParam(name = "fullName", defaultValue = "") String fullName, @RequestParam(name = "facultyId", defaultValue = "0") Integer facultyId) {
        return teacherService.searchTeacher(fullName, facultyId);
    }

    @GetMapping("/get-teacher-by-id")
    Teacher getTeacherInfo(@RequestParam(name = "id") Integer id) {
        return teacherService.findById(id);
    }
//    @PostMapping("/edit-teacher")
//    Teacher editTeacher(@RequestBody TeacherDto teacherDto, @RequestBody Integer id){
//
//    }
}
