package com.example.fullstackbackend.repository.teacher;

import com.example.fullstackbackend.model.teacher.Faculty;
import com.example.fullstackbackend.model.teacher.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ITeacherRepository extends JpaRepository<Teacher,Integer> {
    @Query(value = "select * from teacher where full_name like concat('%',:name,'%')",nativeQuery = true)
    List<Teacher> searchByFullName(@Param("name") String fullName);
    @Query(value = "select * from teacher where full_name like concat('%',:name,'%') and faculty_id = :facultyId\n",nativeQuery = true)
    List<Teacher> searchByFullNameAndFaculty(@Param("name") String fullName, @Param("facultyId") Integer facultyId);

    @Query(value = "select * from teacher join user u on teacher.user_id = u.id\n" +
            "where username like concat('%',:username,'%')",nativeQuery = true)
    Optional<Teacher> findByUsername(@Param("username") String username);

}

