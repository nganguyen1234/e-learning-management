package com.example.fullstackbackend.repository.clazz;

import com.example.fullstackbackend.model.clazz.Clazz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IClassRepository extends JpaRepository<Clazz, Integer> {
    @Query(value = "select * from clazz where name like '1%'", nativeQuery = true)
    List<Clazz> find1stGrade();
    @Query(value = "select * from clazz where instructor_id = :teacherId",nativeQuery = true)
    Clazz getMonitoredClassByTeacherId(@Param("teacherId") Integer teacherId);
}
