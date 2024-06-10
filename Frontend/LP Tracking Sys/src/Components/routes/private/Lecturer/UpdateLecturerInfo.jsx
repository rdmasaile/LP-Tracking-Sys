
import { useState,useEffect } from 'react';
//import './Css/Form.css'
import {Link,useParams} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';


const UpdateLecturerInfo = () => {
    const {userId} = useParams();
    const [state, setState] = useState('idle');
    const [Input, setInput] = useState({});

    const handleOnChange = (e) =>{
        setInput({
            ...Input,[e.target.name]:e.target.value
        })
    }

    const createId = ()=>{
        Input.LectNumber = (Math.floor(Math.random()*3005440) + 1).toString();
    }
    const onSubmit = async (e)=>{
        e.preventDefault();
        createId();
        console.log(Input);
        try{
           const response = await axios.put(`http://127.0.0.1:8000/api/Lecturer/${userId}`,Input);
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
        setInput({
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

    useEffect(()=>{
        const getData = async ()=>{
            try{
                if(state === 'idle'){
                    setState('loading');
                    const res = await axios.get(`http://127.0.0.1:8000/api/Lecturer/${userId}`);
                    setInput(res.data);
                    console.log(Input);
                    setState('loaded');
                }
            }catch(e){
                console.error(e);
                setState('error');
            }
        }
        getData()
    },[state]);

    return (        
        
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header d-flex">
                            <h1>UPDATE LECTURER</h1>
                            
                        </div>
                        <div className="card-body">
                            <form method='POST' onSubmit={e=>onSubmit(e)} >
                                
                                <div className="row mb-3">
                                    <label htmlFor="Name" 
                                    className="col-md-4 col-form-label text-md-end">Name:</label>
                                    <div className="col-md-8">							
                                        <input className="form-control" type="text" 
                                            name="LectName" id="Name" placeholder="Enter your Name"
                                            value={Input.LectName} 
                                            onChange={(e)=>{
                                                handleOnChange(e)
                                            }}></input>
                                        <small id="NameMessage"></small>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="LectDateOfBirth" 
                                    className="col-md-4 col-form-label text-md-end">Date of Birth:</label>
                                    <div className="col-md-8">							
                                        <input className="form-control" type="date" 
                                        name="LectDateOfBirth" id="LectDateOfBirth" 
                                        placeholder="Enter your Date of birth"
                                            value={Input.LectDateOfBirth} 
                                            onChange={(e)=>{
                                                handleOnChange(e)
                                                }}></input>
                                        <small id="NameMessage"></small>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="contacts"  
                                    className="col-md-4 col-form-label text-md-end"> Contacts: </label>
                                    <div className="col-md-8 d-flex">
                                        <select className="col-md-3" title="Country" name="Country" id="code">
                                            <option value="Lesotho">+266 LS</option>
                                            <option value="RSA">+277 SA</option>
                                            <option value="RSA">+267 BTW</option>
                                        </select>
                                        <input className="form-control" type="number" 
                                        name="LectContacts" placeholder="Enter phone number"
                                        id="contacts" value={Input.LectContacts}
                                        onChange={(e)=>{
                                            handleOnChange(e)
                                        }}></input>
                                    </div>
                                    <small id="contactMessage"></small>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="LectEmail"  
                                    className="col-md-4 col-form-label text-md-end">Email: </label>
                                    <div className="col-md-8">
                                        <input className="form-control"  type="Email" 
                                        name="LectEmail" placeholder="Enter your Email address"
                                        id="LectEmail" value={Input.LectEmail} 
                                        onChange={(e)=>{
                                            handleOnChange(e)
                                        }}></input>
                                        <small id="LectEmailMessage"></small>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="LectPassword" 
                                    className="col-md-4 col-form-label text-md-end" >Password: </label>
                                    <div className="col-md-8">
                                        <input className="form-control"  type="Password" 
                                        name="LectPassword" placeholder="Enter your Password" 
                                        id="LectPassword"  required value={Input.LectPassword} 
                                        onChange={(e)=>{
                                            handleOnChange(e)
                                        }}></input>
                                        <small id="LectPasswordMessage"></small>
                                    </div>
                                </div>
                                
                                <div className="row mb-3"> 
                                    <label className="col-md-4 col-form-label text-md-end">Physical Address:</label>                   
                                    <fieldset > 
                                        <div className="row mb-3 "> 
                                            <label htmlFor="LectCountry"  
                                            className="col-md-4 col-form-label text-md-end">Country: </label>
                                    
                                            <div className="col-md-8">
                                                <input className="form-control" type="text" name='LectCountry'
                                                placeholder='Enter Country' value={Input.LectCountry}
                                                onChange={(e)=>{
                                                    handleOnChange(e)
                                                }}/>
                                            </div>
                                        </div>
                                        <div className="row mb-3"> 
                                            <label htmlFor="LectCity"  
                                            className="col-md-4 col-form-label text-md-end">City: </label>
                                            <div className="col-md-8">
                                            <input className="form-control" type="text" name='LectCity'
                                            placeholder='Enter City' value={Input.LectCity}
                                            onChange={(e)=>{
                                                handleOnChange(e)                                
                                            }}/>
                                            </div>
                                        </div>
                                        <div className="row mb-3"> 
                                        <label htmlFor="cillage"  
                                            className="col-md-4 col-form-label text-md-end">Village: </label>
                                        <div className="col-md-8">                     
                                            <input className="form-control" type="text" name='LectVillage'
                                            placeholder='Enter Village' value={Input.LectVillage}
                                            onChange={(e)=>{
                                                handleOnChange(e)
                                            }}/>
                                            </div>
                                        </div>                        
                                        <div className="row mb-3">
                                        <label htmlFor="LectZipCode"  
                                            className="col-md-4 col-form-label text-md-end">ZipCode: </label>
                                        <div className="col-md-8">
                                            <input className="form-control" type="text" name='LectZipCode'
                                            placeholder='Enter Zip-Code'
                                            value={Input.LectZipCode}
                                            onChange={(e)=>{
                                                handleOnChange(e)
                                                }}/>
                                            </div>
                                        </div>                        
                                    </fieldset>
                                </div>
                                
                                
                                
                                <div className="row mb-3">
                                    <button type="submit" className='btn btn-primary'>Update</button>
                                </div>   
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
 
export default UpdateLecturerInfo;
