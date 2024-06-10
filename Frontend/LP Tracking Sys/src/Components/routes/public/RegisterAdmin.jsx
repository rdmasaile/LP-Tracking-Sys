import { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert'

const RegisterAdmin = (props) => {
    

    const [state, setState] = useState({
        AdminName:'',
        AdminNumber:'59595955',
        AdminDateOfBirth: '',
        AdminContacts:'',
        AdminEmail:'',
        AdminPassword:'',
        AdminVillage:'',
        AdminCity:'',
        AdminZipCode:'',
        AdminCountry:'',
        AdminSalary: 30000.00
    });

    const handleOnChange = (e) =>{
        setState({
            ...state,[e.target.name]:e.target.value
        })
    }

    const createId = ()=>{
        state.AdminNumber= (Math.floor(Math.random()*2077000) + 1).toString();
    }
    const onSubmit = async (e)=>{    
        e.preventDefault();
        createId();
        console.log(state);
        try{
           const response = await axios.post('http://127.0.0.1:8000/api/Admin',state);
           if(response.data.status === 200){
                swal({
                    title:'success',
                    icon:'success',
                    text:`${response.data.message} \nYour Lecturer number is ${response.data.data.AdminNumber}`,
                    buttons:'OK!'
                })
                console.log(response.data);
           }
        }catch(e){
            console.error(e);
        }
        setState({
            AdminNumber:'',
            AdminName:'',
            AdminDateOfBirth:'',
            AdminContacts:'',
            AdminEmail:'',
            AdminPassword:'',
            AdminVillage:'',
            AdminCity:'',
            AdminZipCode:'',
            AdminCountry:'',
        });
    }
    return (        
        
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header d-flex">
                            <h1>REGISTER ADMIN</h1>
                            <Link to="/Home" className="btn btn-primary ms-auto btn-xs p-3"> Back </Link>
                        </div>
                        <div className="card-body">
                            <form method='POST' onSubmit={e=>onSubmit(e)} >
                                
                                <div className="row mb-3">
                                    <label htmlFor="Name" 
                                    className="col-md-4 col-form-label text-md-end">Name:</label>
                                    <div className="col-md-6">							
                                        <input className="form-control" type="text" 
                                            name="AdminName" id="Name" placeholder="Enter your Name"
                                            value={state.AdminName} 
                                            onChange={(e)=>{
                                            handleOnChange(e)
                                            }}></input>
                                        <small id="NameMessage"></small>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="AdminDateOfBirth" 
                                    className="col-md-4 col-form-label text-md-end">Date of Birth:</label>
                                    <div className="col-md-6">							
                                        <input className="form-control" type="date" 
                                        name="AdminDateOfBirth" id="AdminDateOfBirth" 
                                        placeholder="Enter your Date of birth"
                                            value={state.AdminDateOfBirth} 
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
                                        name="AdminContacts" placeholder="Enter phone number"
                                        id="contacts" value={state.AdminContacts}
                                        onChange={(e)=>{
                                            handleOnChange(e)
                                        }}></input>
                                    </div>
                                    <small id="contactMessage"></small>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="AdminEmail"  
                                    className="col-md-4 col-form-label text-md-end">Email: </label>
                                    <div className="col-md-6">
                                        <input className="form-control"  type="Email" 
                                        name="AdminEmail" placeholder="Enter your Email address"
                                        id="AdminEmail" value={state.AdminEmail} 
                                        onChange={(e)=>{
                                            handleOnChange(e)
                                        }}></input>
                                        <small id="AdminEmailMessage"></small>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="AdminPassword" 
                                    className="col-md-4 col-form-label text-md-end" >Password: </label>
                                    <div className="col-md-6">
                                        <input className="form-control"  type="Password" 
                                        name="AdminPassword" placeholder="Enter your Password" 
                                        id="AdminPassword"  required value={state.AdminPassword} 
                                        onChange={(e)=>{
                                            handleOnChange(e)
                                        }}></input>
                                        <small id="AdminPasswordMessage"></small>
                                    </div>
                                </div>
                                {/*(props.type === 'Admin') && <div className="row mb-3">
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
                                            <label htmlFor="AdminCountry" name="" 
                                            className="col-md-4 col-form-label text-md-end">Country: </label>
                                    
                                            <div className="col-md-6">
                                                <input className="form-control" type="text" name="AdminCountry" 
                                                placeholder='Enter Country' value={state.AdminCountry}
                                                onChange={(e)=>{
                                                    handleOnChange(e)
                                                }}/>
                                            </div>
                                        </div>
                                        <div className="row mb-3"> 
                                            <label htmlFor="AdminCity"  
                                            className="col-md-4 col-form-label text-md-end">City: </label>
                                            <div className="col-md-6">
                                            <input className="form-control" type="text" name="AdminCity" 
                                            placeholder='Enter City' value={state.AdminCity}
                                            onChange={(e)=>{
                                                handleOnChange(e)                                
                                            }}/>
                                            </div>
                                        </div>
                                        <div className="row mb-3"> 
                                        <label htmlFor="cillage"  
                                            className="col-md-4 col-form-label text-md-end">Village: </label>
                                        <div className="col-md-6">                     
                                            <input className="form-control" type="text" name='AdminVillage'
                                            placeholder='Enter Village' value={state.AdminVillage}
                                            onChange={(e)=>{
                                                handleOnChange(e)
                                            }}/>
                                            </div>
                                        </div>                        
                                        <div className="row mb-3">
                                        <label htmlFor="AdminZipCode"  
                                            className="col-md-4 col-form-label text-md-end">ZipCode: </label>
                                        <div className="col-md-6">
                                            <input className="form-control" type="text" name='AdminZipCode'
                                            placeholder='Enter Zip-Code'
                                            value={state.AdminZipCode}
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
 
export default RegisterAdmin;
