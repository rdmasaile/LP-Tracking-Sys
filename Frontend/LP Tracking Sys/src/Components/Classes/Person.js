
export class Person {
    name;
    phoneNumber;
    address;
    dateOfBirth;
    localDate;   

    constructor(name,phoneNumber,address,password,dateOfBirth){
        this.setName(name);
        this.setPhoneNumber(phoneNumber);
        this.setAddress(address);
        this.setPassword(password);
        this.setDateOfBirth(dateOfBirth);        
        this.localDate = new Date();
    }
    
    setName(name){
        if(name!=null)
            this.name = name;
        else
            alert("Name should not be empty");
    }
    
    getName(){return this.name;}
    
    setPhoneNumber(phoneNumber){
        if(phoneNumber != null)
            this.phoneNumber = phoneNumber;
        else
            alert("Phone number should not be empty");
    }
    
    getPhoneNumber(){return this.phoneNumber;}
    setAddress(address){this.address = address;}
    getAddress(){return this.address;}
    setPassword(password){
        this.password = password;
    }
    getPassword(){
        return this.password;
    }
    setDateOfBirth(dateOfBirth){this.dateOfBirth = dateOfBirth;}
    getDateOfBirth(){return this.dateOfBirth;}
    
    getAge(){
        return this.calculateAge();
    }
    
    calculateAge(){
        return (this.localDate.getFullYear() - this.dateOfBirth.getFullYear());
    }    
    //displayCourses();    
}
