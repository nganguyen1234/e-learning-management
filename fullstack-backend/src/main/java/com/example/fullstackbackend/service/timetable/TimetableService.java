package com.example.fullstackbackend.service.timetable;

import com.example.fullstackbackend.model.clazz.Clazz;
import com.example.fullstackbackend.model.timeTable.Timetable;
import com.example.fullstackbackend.repository.ITimetableRepository;
import com.example.fullstackbackend.repository.clazz.IClassRepository;
import com.example.fullstackbackend.service.clazz.ClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TimetableService {
    @Autowired
    private ITimetableRepository timetableRepository;

    @Autowired
    private ClassService classService;

    public Timetable getTimetableByClass(Integer classId) {
        Clazz clazz = classService.getClassById(classId);
        if (clazz != null) {
            return timetableRepository.findTimetableByClazz(clazz);
        }
        return null;
    }

}
