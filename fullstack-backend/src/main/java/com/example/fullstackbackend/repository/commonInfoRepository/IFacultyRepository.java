package com.example.fullstackbackend.repository.commonInfoRepository;

import com.example.fullstackbackend.model.teacher.Faculty;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IFacultyRepository extends JpaRepository<Faculty,Integer> {
}
