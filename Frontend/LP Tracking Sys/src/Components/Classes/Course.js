
export default class Course {

    constructor(courseName, courseCode,marks){
        this.setCourseName(courseName);
        this.setCourseCode(courseCode);
        this.setMarks(marks)
    }
    setMarks(marks){
        this.marks = marks
    }
    setCourseName(courseName){this.courseName = courseName;}
    setCourseCode(courseCode){this.courseCode = courseCode;}

    getCourseName(){return this.courseName;}
    getCourseCode(){return this.courseCode;}
    
}
