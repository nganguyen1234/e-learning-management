package com.example.fullstackbackend.controller;

import com.example.fullstackbackend.dto.teacher.TeacherDto;
import com.example.fullstackbackend.model.teacher.Teacher;
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
    Teacher getTeacherInfoById(@RequestParam(name = "id") Integer id) {
        return teacherService.findById(id);
    }

    //    @PostMapping("/edit-teacher")
//    Teacher editTeacher(@RequestBody TeacherDto teacherDto, @RequestBody Integer id){
//
//    }
    @GetMapping("/get-personal-info/{username}")
    TeacherDto getTeacherInfoByUsername(@PathVariable(name = "username") String username) {
        return teacherService.getFullTeacherInfo(username);

    }

    @PostMapping("/update-personal-information")
    Teacher editPersonalInfo(@RequestBody TeacherDto teacherDto) {
        try {
            Teacher teacher = new Teacher();
            BeanUtils.copyProperties(teacher, teacherDto);
            return teacherService.editTeacher(teacher);
        } catch (Exception e) {
            return null;
        }
    }
}
