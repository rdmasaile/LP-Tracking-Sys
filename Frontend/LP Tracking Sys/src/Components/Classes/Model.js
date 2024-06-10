import LpSys from "./LpSys";
import Admin from "./Admin";
import Lecture from "./Lecturer";
import Student from "./Student";

class Model {

    constructor(){
        this.lpSys = new LpSys();
    }
    addStudent(student){
        let isThere = true;     
        if(!this.lpSys.getStudents().find(std=>std.stdId === student.stdId)){
            this.lpSys.students = [...this.lpSys.students ,student]
            console.log(student);
            isThere = false;
        }else
            isThere = true;
        return isThere;
    }
    getStudents(){
        return this.lpSys.students;
    }
    
    addAdmin(admin){
        let isThere = true;     
        if(!this.lpSys.getAdmins().find(adm=>adm.empId === admin.empId)){
            this.lpSys.addAdmin(admin);
            console.log(admin);
            isThere = false;
        }else
            isThere = true;
        return isThere;
    }
    getAdmins(){
        return this.lpSys.admins ;
    }
    
    addLecturer(lecturer){
        let isThere = true;     
        if(!this.lpSys.getLecturers().find(lect=>lect.empId === lecturer.empId)){
            this.lpSys.addLecturer(lecturer);
            console.log(this.lpSys.lecturers);
            isThere = false;
        }else
            isThere = true;
        return isThere;
    }  
    getLecturers(){
        return this.lpSys.lecturers;
    } 
    findStudent(student){
        return this.lpSys.students.find(std => ((std.name === student.username)&&(std.password === student.password)))
    }
    findLecturer(lecturer){
        return this.lpSys.lecturers.find(lect => ((lect.name === lecturer.username)&&(lect.password === lecturer.password)))
    }
    delete(person){
        if (person instanceof Student)
            this.lpSys.students = this.lpSys.students.filter((s)=>s !== person);
        else if (person instanceof Lecture)
            this.lpSys.lecturers = this.lpSys.lecturers.filter((l)=>l !== person);
        else if (person instanceof Admin)
            this.lpSys.admins = this.lpSys.admins.filter((a)=>a !== person);
    }
    update(person){
        let currentObject = null;
        if (person instanceof Student){
            currentObject = this.lpSys.students.find((s)=>s.stdId == person.stdId);
        }
        else if (person instanceof Lecture){
            currentObject = this.lpSys.lecturers.find((l)=>l.empId == person.empId);
            if(currentObject){
                let index = this.lpSys.getLecturers().indexOf(currentObject);
                this.lpSys.lecturers[index]=person;
            }
            console.log(this.lpSys.getLecturers());
        }else if (person instanceof Admin){
            currentObject = this.lpSys.admins.find((a)=>a.empId == person.empId);
        }
    }
}
 
export default Model