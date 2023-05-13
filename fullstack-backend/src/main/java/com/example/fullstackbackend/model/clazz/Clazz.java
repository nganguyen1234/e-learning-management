package com.example.fullstackbackend.model.clazz;

import com.example.fullstackbackend.model.student.Student;
import com.example.fullstackbackend.model.teacher.Teacher;
import org.hibernate.annotations.SQLDelete;

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
    @OneToMany
    private Set<SubjectTeachersRecord> subjectTeachersRecords;
    @OneToOne
    private Teacher instructor;
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

    public Set<SubjectTeachersRecord> getSubjectTeachersRecords() {
        return subjectTeachersRecords;
    }

    public void setSubjectTeachersRecords(Set<SubjectTeachersRecord> subjectTeachersRecords) {
        this.subjectTeachersRecords = subjectTeachersRecords;
    }

    public boolean isDeleted() {
        return isDeleted;
    }

    public Teacher getInstructor() {
        return instructor;
    }

    public void setInstructor(Teacher instructor) {
        this.instructor = instructor;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }
}
