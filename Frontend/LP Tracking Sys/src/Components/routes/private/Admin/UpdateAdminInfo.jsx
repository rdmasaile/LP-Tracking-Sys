import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { useAuth } from "../../../AuthProvider";
 

let userInfo = null;

const UpdateAdminInfo = () => {
   const {userId} = useParams();
   const {data} = useAuth();
   const [state, setState] = useState('idle');
   const [Input, setInput] = useState(data);

   console.log(data);
   const handleOnChange = (e) =>{
      setInput({
         ...Input,[e.target.name]:e.target.value
      })
   }

   //  const createId = ()=>{
   //      Input.AdminNumber= (Math.floor(Math.random()*2077000) + 1).toString();
   //  }
    const onSubmit = async (e)=>{    
      e.preventDefault();
      if(Input === userInfo){
         swal({
            title:'success',
            icon:'success',
            text:`No Update has been made`,
            buttons:'OK!'
         })
      }
      console.log(Input);
      console.log(userInfo);
      try{
         const response = await axios.put(`http://127.0.0.1:8000/api/Admin/${userId}`,Input);
         if(response.data.status === 200){
            swal({
               title:'success',
               icon:'success',
               text:`${response.data.message} \nYour Lecturer number is ${response.data.data.AdminNumber}`,
               buttons:'OK!'
            })
         }
      }catch(e){
         console.error(e);
      }
      setInput({
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
   // const getData = async ()=>{
   //    try{         
   //       setState('loading');
   //       const res = await axios.get(`http://127.0.0.1:8000/api/Admin/${userId}`);
   //       const {AdminNumber,AdminName,AdminDateOfBirth,AdminContacts,AdminEmail,AdminPassword,AdminVillage,AdminCity,AdminZipCode,AdminCountry,AdminSalary} = res.data
   //       setInput({AdminNumber,AdminName,AdminDateOfBirth,AdminContacts,AdminEmail,AdminPassword,AdminVillage,AdminCity,AdminZipCode,AdminCountry,AdminSalary});
   //       userInfo = {AdminNumber,AdminName,AdminDateOfBirth,AdminContacts,AdminEmail,AdminPassword,AdminVillage,AdminCity,AdminZipCode,AdminCountry,AdminSalary};
   //       console.log(userInfo);
   //       setState('loaded');
         
   //    }catch(e){
   //       console.error(e);
   //       setState('error');
   //    }
   // }

    useEffect(()=>{
      
    },[state]);


    return (        
        
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header d-flex">
                            <h1>UPDATE ADMIN</h1>
                        </div>
                        <div className="card-body">
                            <form method='POST' onSubmit={e=>onSubmit(e)} >
                                
                                <div className="row mb-3">
                                    <label htmlFor="Name" 
                                    className="col-md-4 col-form-label text-md-end">Name:</label>
                                    <div className="col-md-8">							
                                        <input className="form-control" type="text" 
                                            name="AdminName" id="Name" placeholder="Enter your Name"
                                            value={Input.AdminName} 
                                            onChange={(e)=>{
                                            handleOnChange(e)
                                            }}></input>
                                        <small id="NameMessage"></small>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="AdminDateOfBirth" 
                                    className="col-md-4 col-form-label text-md-end">Date of Birth:</label>
                                    <div className="col-md-8">							
                                        <input className="form-control" type="date" 
                                        name="AdminDateOfBirth" id="AdminDateOfBirth" 
                                        placeholder="Enter your Date of birth"
                                            value={Input.AdminDateOfBirth} 
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
                                        name="AdminContacts" placeholder="Enter phone number"
                                        id="contacts" value={Input.AdminContacts}
                                        onChange={(e)=>{
                                            handleOnChange(e)
                                        }}></input>
                                    </div>
                                    <small id="contactMessage"></small>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="AdminEmail"  
                                    className="col-md-4 col-form-label text-md-end">Email: </label>
                                    <div className="col-md-8">
                                        <input className="form-control"  type="Email" 
                                        name="AdminEmail" placeholder="Enter your Email address"
                                        id="AdminEmail" value={Input.AdminEmail} 
                                        onChange={(e)=>{
                                            handleOnChange(e)
                                        }}></input>
                                        <small id="AdminEmailMessage"></small>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="AdminPassword" 
                                    className="col-md-4 col-form-label text-md-end" >Password: </label>
                                    <div className="col-md-8">
                                        <input className="form-control"  type="Password" 
                                        name="AdminPassword" placeholder="Enter your Password" 
                                        id="AdminPassword"  required value={Input.AdminPassword} 
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
                                    
                                            <div className="col-md-8">
                                                <input className="form-control" type="text" name="AdminCountry" 
                                                placeholder='Enter Country' value={Input.AdminCountry}
                                                onChange={(e)=>{
                                                    handleOnChange(e)
                                                }}/>
                                            </div>
                                        </div>
                                        <div className="row mb-3"> 
                                            <label htmlFor="AdminCity"  
                                            className="col-md-4 col-form-label text-md-end">City: </label>
                                            <div className="col-md-8">
                                            <input className="form-control" type="text" name="AdminCity" 
                                            placeholder='Enter City' value={Input.AdminCity}
                                            onChange={(e)=>{
                                                handleOnChange(e)                                
                                            }}/>
                                            </div>
                                        </div>
                                        <div className="row mb-3"> 
                                        <label htmlFor="cillage"  
                                            className="col-md-4 col-form-label text-md-end">Village: </label>
                                        <div className="col-md-8">                     
                                            <input className="form-control" type="text" name='AdminVillage'
                                            placeholder='Enter Village' value={Input.AdminVillage}
                                            onChange={(e)=>{
                                                handleOnChange(e)
                                            }}/>
                                            </div>
                                        </div>                        
                                        <div className="row mb-3">
                                        <label htmlFor="AdminZipCode"  
                                            className="col-md-4 col-form-label text-md-end">ZipCode: </label>
                                        <div className="col-md-8">
                                            <input className="form-control" type="text" name='AdminZipCode'
                                            placeholder='Enter Zip-Code'
                                            value={Input.AdminZipCode}
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
 
export default UpdateAdminInfo;
