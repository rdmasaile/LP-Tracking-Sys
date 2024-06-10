import { Person } from "./Person";

export default class Employee extends Person {
    salary;
    constructor(empId,name, phoneNumber,address,password,dateOfBirth,salary) {
        super(name, phoneNumber,address,password,dateOfBirth);
        this.setSalary(salary);
        this.setEmpId(empId);
    }
    setEmpId(empId){
        this.empId = empId;
    }
     
    setSalary(salary) {
        this.salary = salary;
    }
    
    getSalary(){
        return this.getSalary();
    }
}