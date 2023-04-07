package com.example.fullstackbackend.controller;

import com.example.fullstackbackend.model.timeTable.Timetable;
import com.example.fullstackbackend.service.timetable.TimetableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/timetable")
public class TimetableController {

    @Autowired
    private TimetableService timetableService;

    @GetMapping("/get-timetable-by-class")
    public Timetable getTimetableByClass(@RequestParam(name = "classId") Integer classId) {
        return timetableService.getTimetableByClass(classId);
    }

}
