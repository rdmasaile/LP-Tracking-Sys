import Employee from "./Employee";

export default class Admin extends Employee{
    constructor(empId,name, phoneNumber,address,password,dateOfBirth,salary){
        super(empId,name, phoneNumber,address,password,dateOfBirth,salary)
    }
}