package com.example.fullstackbackend.model.clazz;

import com.example.fullstackbackend.model.student.Student;
import com.example.fullstackbackend.model.teacher.Teacher;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Clazz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    @OneToMany
    private Set<Student> studentSet;
    @ManyToMany
    private Set<Teacher> teacherSet;
    @OneToOne
    private Teacher formTeacher;
    @Column(columnDefinition = "boolean default false")
    private boolean isDeleted;
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Student> getStudentSet() {
        return studentSet;
    }

    public void setStudentSet(Set<Student> studentSet) {
        this.studentSet = studentSet;
    }

    public Set<Teacher> getTeacherSet() {
        return teacherSet;
    }

    public void setTeacherSet(Set<Teacher> teacherSet) {
        this.teacherSet = teacherSet;
    }

    public boolean isDeleted() {
        return isDeleted;
    }

    public Teacher getFormTeacher() {
        return formTeacher;
    }

    public void setFormTeacher(Teacher formTeacher) {
        this.formTeacher = formTeacher;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }
}
