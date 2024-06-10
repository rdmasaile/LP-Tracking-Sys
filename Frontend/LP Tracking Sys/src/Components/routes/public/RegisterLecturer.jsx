
import { useState } from 'react';
//import './Css/Form.css'
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';


const RegisterLecturer = (props) => {
    

    const [state, setState] = useState({
        LectName:'',
        LectNumber:'',
        LectDateOfBirth:'',
        LectContacts:'',
        LectEmail:'',
        LectPassword:'',
        LectVillage:'',
        LectCity:'',
        LectZipCode:'',
        LectCountry:'',
        LectSalary:20000.99
    });

    const handleOnChange = (e) =>{
        setState({
            ...state,[e.target.name]:e.target.value
        })
    }

    const createId = ()=>{
        state.LectNumber = (Math.floor(Math.random()*3005440) + 1).toString();
    }
    const onSubmit = async (e)=>{
        e.preventDefault();
        createId();
        console.log(state);
        try{
           const response = await axios.post('http://127.0.0.1:8000/api/Lecturer',state);
           if(response.data.status=== 200){
                swal({
                    title:'success',
                    icon:'success',
                    text:`${response.data.message} \nYour Lecturer number is ${response.data.data.LectNumber}`,
                    buttons:'OK!'
                })
                console.log(response);
           }
        }catch(e){
            console.error(e);
        }
        setState({
            LectNumber:'',
            LectName:'',
            LectDateOfBirth:'',
            LectContacts:'',
            LectEmail:'',
            LectPassword:'',
            LectVillage:'',
            LectCity:'',
            LectZipCode:'',
            LectCountry:'',
        });
    }
    return (        
        
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header d-flex">
                            <h1>REGISTER LECTURER</h1>
                            <Link to="/Home" className="btn btn-primary ms-auto btn-xs p-3"> Back </Link>
                        </div>
                        <div className="card-body">
                            <form method='POST' onSubmit={e=>onSubmit(e)} >
                                
                                <div className="row mb-3">
                                    <label htmlFor="Name" 
                                    className="col-md-4 col-form-label text-md-end">Name:</label>
                                    <div className="col-md-6">							
                                        <input className="form-control" type="text" 
                                            name="LectName" id="Name" placeholder="Enter your Name"
                                            value={state.LectName} 
                                            onChange={(e)=>{
                                                handleOnChange(e)
                                            }}></input>
                                        <small id="NameMessage"></small>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="LectDateOfBirth" 
                                    className="col-md-4 col-form-label text-md-end">Date of Birth:</label>
                                    <div className="col-md-6">							
                                        <input className="form-control" type="date" 
                                        name="LectDateOfBirth" id="LectDateOfBirth" 
                                        placeholder="Enter your Date of birth"
                                            value={state.LectDateOfBirth} 
                                            onChange={(e)=>{
                                                handleOnChange(e)
                                                }}></input>
                                        <small id="NameMessage"></small>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="contacts"  
                                    className="col-md-4 col-form-label text-md-end"> Contacts: </label>
                                    <div className="col-md-6 d-flex">
                                        <select className="col-md-3" title="Country" name="Country" id="code">
                                            <option value="Lesotho">+266 LS</option>
                                            <option value="RSA">+277 SA</option>
                                            <option value="RSA">+267 BTW</option>
                                        </select>
                                        <input className="form-control" type="number" 
                                        name="LectContacts" placeholder="Enter phone number"
                                        id="contacts" value={state.LectContacts}
                                        onChange={(e)=>{
                                            handleOnChange(e)
                                        }}></input>
                                    </div>
                                    <small id="contactMessage"></small>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="LectEmail"  
                                    className="col-md-4 col-form-label text-md-end">Email: </label>
                                    <div className="col-md-6">
                                        <input className="form-control"  type="Email" 
                                        name="LectEmail" placeholder="Enter your Email address"
                                        id="LectEmail" value={state.LectEmail} 
                                        onChange={(e)=>{
                                            handleOnChange(e)
                                        }}></input>
                                        <small id="LectEmailMessage"></small>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="LectPassword" 
                                    className="col-md-4 col-form-label text-md-end" >Password: </label>
                                    <div className="col-md-6">
                                        <input className="form-control"  type="Password" 
                                        name="LectPassword" placeholder="Enter your Password" 
                                        id="LectPassword"  required value={state.LectPassword} 
                                        onChange={(e)=>{
                                            handleOnChange(e)
                                        }}></input>
                                        <small id="LectPasswordMessage"></small>
                                    </div>
                                </div>
                                {/*(props.type === 'LECTURER') && <div className="row mb-3">
                                    <label htmlFor="salary" >Salary: </label>
                                    <input className="form-control"  type="number" name="salary" placeholder="Enter your Salary" 
                                    id="salary"  required value={salary} 
                                    onChange={(e)=>{
                                        setSalary(e.target.value)
                                    }}></input>
                                    <small id="salaryMessage"></small>
                                    </div>
                                */}
                                <div className="row mb-3"> 
                                    <label className="col-md-4 col-form-label text-md-end">Physical Address:</label>                   
                                    <fieldset > 
                                        <div className="row mb-3 "> 
                                            <label htmlFor="LectCountry"  
                                            className="col-md-4 col-form-label text-md-end">Country: </label>
                                    
                                            <div className="col-md-6">
                                                <input className="form-control" type="text" name='LectCountry'
                                                placeholder='Enter Country' value={state.LectCountry}
                                                onChange={(e)=>{
                                                    handleOnChange(e)
                                                }}/>
                                            </div>
                                        </div>
                                        <div className="row mb-3"> 
                                            <label htmlFor="LectCity"  
                                            className="col-md-4 col-form-label text-md-end">City: </label>
                                            <div className="col-md-6">
                                            <input className="form-control" type="text" name='LectCity'
                                            placeholder='Enter City' value={state.LectCity}
                                            onChange={(e)=>{
                                                handleOnChange(e)                                
                                            }}/>
                                            </div>
                                        </div>
                                        <div className="row mb-3"> 
                                        <label htmlFor="cillage"  
                                            className="col-md-4 col-form-label text-md-end">Village: </label>
                                        <div className="col-md-6">                     
                                            <input className="form-control" type="text" name='LectVillage'
                                            placeholder='Enter Village' value={state.LectVillage}
                                            onChange={(e)=>{
                                                handleOnChange(e)
                                            }}/>
                                            </div>
                                        </div>                        
                                        <div className="row mb-3">
                                        <label htmlFor="LectZipCode"  
                                            className="col-md-4 col-form-label text-md-end">ZipCode: </label>
                                        <div className="col-md-6">
                                            <input className="form-control" type="text" name='LectZipCode'
                                            placeholder='Enter Zip-Code'
                                            value={state.LectZipCode}
                                            onChange={(e)=>{
                                                handleOnChange(e)
                                                }}/>
                                            </div>
                                        </div>                        
                                    </fieldset>
                                </div>
                                
                                
                                
                                <div className="row mb-3">
                                    <button type="submit" className='btn btn-primary'>Submit</button>
                                </div>   
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
 
export default RegisterLecturer;
