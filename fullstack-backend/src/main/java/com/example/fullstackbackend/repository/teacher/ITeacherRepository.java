package com.example.fullstackbackend.repository.teacher;

import com.example.fullstackbackend.model.teacher.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ITeacherRepository extends JpaRepository<Teacher,Integer> {
    List<Teacher> findByFullName(String name);
}

