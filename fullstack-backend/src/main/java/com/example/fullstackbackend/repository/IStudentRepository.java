package com.example.fullstackbackend.repository;

import com.example.fullstackbackend.model.student.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IStudentRepository extends JpaRepository<Student,Integer> {
    @Query(value = "select * from student where clazz_id = :classId  and is_deleted=false",nativeQuery = true)
    List<Student> getStudentByClazz(@Param( "classId") Integer classId);
}
