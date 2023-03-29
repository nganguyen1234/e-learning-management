package com.example.fullstackbackend.model.student;

import com.example.fullstackbackend.model.timeTable.Subject;

import javax.persistence.*;

@Entity
public class Score {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
    private Student student;
    @ManyToOne
    private Subject subject;
    private ScoreFactorNumber scoreFactorNumber;
    private Double score;
    @Column(columnDefinition = "boolean default false")
    private boolean isDeleted;
    enum ScoreFactorNumber {
        daily,
        monthly,
        yearly
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }

    public ScoreFactorNumber getScoreFactorNumber() {
        return scoreFactorNumber;
    }

    public void setScoreFactorNumber(ScoreFactorNumber scoreFactorNumber) {
        this.scoreFactorNumber = scoreFactorNumber;
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }

    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }
}
