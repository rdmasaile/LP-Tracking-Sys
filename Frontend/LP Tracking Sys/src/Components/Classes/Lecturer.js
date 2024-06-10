import Employee from "./Employee";

export default class Lecture extends Employee{
    salary;
    bonus;
    courses=[]
    constructor(empId,name, phoneNumber,address,password,dateOfBirth,salary,courses){
        super(empId,name,phoneNumber,address,password,dateOfBirth,salary);
        this.bonus = 5000;     
        this.setCourses(courses);   
    }

    setCourses(courses){
        this.courses = courses;
    }
    getCourses(){
        return this.courses;
    }
    getSalary(){
        return this.calculatePayment();
    }
    
    calculatePayment(){           
        return (this.getCourses().length >= 4) ? this.salary += this.bonus : this.salary;
    }

}
