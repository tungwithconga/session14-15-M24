class Student {
    id: number;
    name: string;
    enrolledCourses: Course[];

    constructor(studentId: number, studentName: string) {
        this.id = studentId;
        this.name = studentName;
        this.enrolledCourses = [];
    }
    enroll(course: Course): void {
        this.enrolledCourses.push(course);
    }
}
class hip {
    id: number;
    name: string;
    constructor(hipId: number, hipName: string) {
        this.id = hipId;
        this.name = hipName;
    }
    createCourse(tieuDe: string): Course {
        return new Course(tieuDe, this);
    }
    createLesson(tieuDe: string): Lesson {
        return new Lesson(tieuDe);
    }
    createAssignment(tieuDe: string): Assignment {
        return new Assignment(tieuDe);
    }
    createAssessment(tieuDe: string): Assessment {
        return new Assessment(tieuDe);
    }
}
class Course {
    tieuDe: string;
    hip: hip;
    baiGiang: Lesson[];
    hop: Assessment[];
    constructor(tieuDe: string, hip: hip) {
        this.tieuDe = tieuDe;
        this.hip = hip;
        this.baiGiang = [];
        this.hop = [];
    }
    addLesson(lesson: Lesson): void {
        this.baiGiang.push(lesson);
    }
    addAssessment(assessment: Assessment): void {
        this.hop.push(assessment);
    }
}
class Lesson {
    tieuDe: string;
    assignments: string[];

    constructor(tieuDe: string) {
        this.tieuDe = tieuDe;
        this.assignments = [];
    }
}
class Assignment {
    tieuDe: string;

    constructor(tieuDe: string) {
        this.tieuDe = tieuDe;
    }
}
class Assessment {
    tieuDe: string;

    constructor(tieuDe: string) {
        this.tieuDe = tieuDe;
    }
}
