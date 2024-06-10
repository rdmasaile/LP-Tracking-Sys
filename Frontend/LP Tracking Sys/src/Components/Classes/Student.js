import {Person} from "./Person.js";

export default class Student extends Person{
    isLocal;
    isPartTime;
    COURSE_MAX_NUMBER = 7;
    COURSE_MIN_NUMBER = 1;
    courses = [];
    
    constructor(stdId,name,phoneNumber,address,password,dateOfBirth,courses){
        super(name,phoneNumber,address,password,dateOfBirth); 
        this.setStdId(stdId);
        //this.setMarks(marks) 
        this.setCourses(courses);     
        this.isPartTime = this.checkWhetherIsPartTime();
        this.isLocal = this.checkLocality();
    }
    setCourses(subjects) {
        this.courses = subjects;
    }
    
    getCourses(){
        return this.courses;
    }
    
    setStdId(stdId){
        this.stdId = stdId;
    } 
    getStdId(){
        return this.stdId;
    }   
    /*setMarks(marks){
        if (marks.length < this.getCourses().length)
            alert("Marks are less than courses");
        if(this.marks.length > this.getCourses().length)
            alert("Marks are greater than courses");
        else

        this.marks = marks;
    } */
      
    checkLocality(){
        return (this.getAddress().getCountry() === "Lesotho");
    }    
    checkWhetherIsPartTime(){
        return (this.getCourses().length >= 1 && this.getCourses().length <= 2);
    }
    getAverage(){
        return this.calculateAverage();
    }
    calculateAverage(){
        let sum = 0;
        this.getCourses().forEach( ({marks}) => {            
            sum += marks.getFinalMark();
        });
        return sum / this.getCourses().length;
    }
    getNationality(){
        return (this.isLocal)? "Local" : "International";
    }
    getType(){
        return (this.isPartTime)? "Part-time" : "Full-time";
    }    
}
