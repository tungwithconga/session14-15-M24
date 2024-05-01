"use strict";
class Student {
    constructor(studentId, studentName) {
        this.id = studentId;
        this.name = studentName;
        this.enrolledCourses = [];
    }
    enroll(course) {
        this.enrolledCourses.push(course);
    }
}
class Instructor {
    constructor(instructorId, instructorName) {
        this.id = instructorId;
        this.name = instructorName;
    }
    createCourse(title) {
        return new Course(title, this);
    }
    createLesson(title) {
        return new Lesson(title);
    }
    createAssignment(title) {
        return new Assignment(title);
    }
    createAssessment(title) {
        return new Assessment(title);
    }
}
class Course {
    constructor(title, instructor) {
        this.title = title;
        this.instructor = instructor;
        this.lessons = [];
        this.assessments = [];
    }
    addLesson(lesson) {
        this.lessons.push(lesson);
    }
    addAssessment(assessment) {
        this.assessments.push(assessment);
    }
}
class Lesson {
    constructor(title) {
        this.title = title;
        this.assignments = [];
    }
}
class Assignment {
    constructor(title) {
        this.title = title;
    }
}
class Assessment {
    constructor(title) {
        this.title = title;
    }
}
