
import View from "./View";
import Model from "./Model";


export default class Controller{
    constructor(){
        this.data = null
        this.view = new View();
        this.model = new Model();
        //this.view = new View();
    }
    /**
     * @param data : info to be send to or gathered from the database : object 
     * @param type : find | validate | store : string
     * @param person : Lecturer | Admin | Student : string 
     * @param method : GET | POST | DELETE | PUT 
     */
    request(data,type,person,method){

        switch(method){
            case 'GET': 
                if (person === 'Student')               
                    this.data = this.model.getStudents();
                else if(person === 'Lecturer')
                    this.data = this.model.getLecturers();
                else
                    this.data = this.model.getAdmins();
                break
            case 'POST':
                if(person === 'Student')
                    this.model.addStudent(data)
                else if(person === 'Lecturer')
                    this.model.addLecturer(data)
                else if (person === 'Admin')
                    this.model.addAdmin(data)
                break
            case 'DELETE':
                if(person === 'Admin'){
                    this.model.delete(data)
                }
                break
            case 'PUT':
                if(person === 'Student')
                    (this.model.updateStudent(data))? console.log('Successfully registered message'): 
                        console.log('This account is already registered message');
                else if(person === 'Lecturer')
                    this.model.update(data)
                else if (person === 'Admin')
                    this.model.updateAdmin(data)
                break
            default:
                return 
        }
        return this.data;
    }
    
    view(){

    }
}