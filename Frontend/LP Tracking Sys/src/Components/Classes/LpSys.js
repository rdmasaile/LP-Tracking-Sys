
class LpSys {
    students = [];
    lecturers = [];
    admins = [];

    addStudent(student){
        this.students = [...this.students,student]
        //this.students.push(student);
    }
    getStudents(){
        return this.students;
    }
    
    addAdmin(admin){
        this.admins.push(admin);
    }
    getAdmins(){
        return this.admins;
    }
    
    addLecturer(lecturer){
        this.lecturers.push(lecturer);
    }  
    getLecturers(){
        return this.lecturers;
    } 

}

export default LpSys;