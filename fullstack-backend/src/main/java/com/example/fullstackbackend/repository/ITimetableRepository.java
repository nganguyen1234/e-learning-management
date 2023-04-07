package com.example.fullstackbackend.repository;

import com.example.fullstackbackend.model.clazz.Clazz;
import com.example.fullstackbackend.model.timeTable.Timetable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITimetableRepository extends JpaRepository<Timetable,Integer> {
    public Timetable findTimetableByClazz(Clazz clazz);
}
