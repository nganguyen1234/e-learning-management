package com.example.fullstackbackend.model.clazz;

import com.example.fullstackbackend.model.teacher.Teacher;
import com.example.fullstackbackend.model.timeTable.Subject;

import javax.persistence.*;

@Entity
public class SubjectTeachersRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
    private Clazz clazz;
    @OneToOne
    private Subject subject;
    @OneToOne
    private Teacher teacher;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Clazz getClazz() {
        return clazz;
    }

    public void setClazz(Clazz clazz) {
        this.clazz = clazz;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }
}
