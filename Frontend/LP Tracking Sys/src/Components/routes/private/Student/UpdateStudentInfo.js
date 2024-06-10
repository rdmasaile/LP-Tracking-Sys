
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';

const UpdateStudentInfo = ({std}) => {
   const {userId} = useParams();
   const [state, setState] = useState('idle');

   const [input, setInput] = useState({
   });
   if(std){
      setInput(std);
      setState('loaded');
   }
   const handleOnChange = (e) =>{
      setInput({
         ...input,[e.target.name]:e.target.value
      })
   }

   const createId = ()=>{
      input.StdNumber= (Math.floor(Math.random()*1000000) + 1).toString();
   }
   const onSubmit = async (e)=>{    
      e.preventDefault();
      createId()
      console.log(input);
      if(std) input.State = 'Approved';
      try{
         const response = await axios.put(`http://127.0.0.1:8000/api/Student/${(!std)?userId:std.id}`,input);
         if(response.data.status === 200){
               swal({
                  title:'success',
                  icon:'success',
                  text:`${response.data.message} \nYour Lecturer number is ${response.data.data.StdNumber}`,
                  buttons:'OK!'
               })
               console.log(response);
         }
      }catch(e){
         console.error(e);
      }
      setInput({
         StdNumber:'',
         StdName:'',
         StdDateOfBirth:'',
         StdContacts:'',
         StdEmail:'',
         StdPassword:'',
         StdVillage:'',
         StdCity:'',
         StdZipCode:'',
         StdCountry:'',
      });
      setState('idle');
   }
   
   useEffect(()=>{
      const getData = async ()=>{
         try{
            if(state === 'idle'){
               setState('loading');
               const res = await axios.get(`http://127.0.0.1:8000/api/Student/${userId}`);
               setInput(res.data);
               setState('loaded');
            }
         }catch(e){
            console.error(e);
            setState('error');
         }
      }
      getData()
   },[input, state, userId]);

   return (        
      
      <div className='container'>
         <div className="row justify-content-center">
               <div className="col-md-12">
                  <div className="card">
                     <div className="card-header">
                           <h1>UPDATE STUDENT</h1>
                     </div>
                     <div className="card-body">
                           {(state === 'loaded')&&(<form method='POST' onSubmit={e=>onSubmit(e)} >
                              
                              <div className="row mb-3">
                                 <label htmlFor="StdName" 
                                 className="col-md-4 col-form-label text-md-end">Username:</label>
                                 <div className="col-md-8">							
                                       <input className="form-control" type="text" 
                                          name="StdName" id="StdName" placeholder="Enter your Name"
                                          value={input.StdName} 
                                          onChange={(e)=>{
                                          handleOnChange(e)
                                          }}></input>
                                       <small id="UserNameMessage"></small>
                                 </div>
                              </div>
                              <div className="row mb-3">
                                 <label htmlFor="StdDateOfBirth" 
                                 className="col-md-4 col-form-label text-md-end">Date of Birth:</label>
                                 <div className="col-md-8">							
                                       <input className="form-control" type="date" 
                                       name="StdDateOfBirth" id="StdDateOfBirth" 
                                       placeholder="Enter your Date of birth"
                                          value={input.StdDateOfBirth} 
                                          onChange={(e)=>{
                                             handleOnChange(e)
                                             }}></input>
                                       <small id="UserNameMessage"></small>
                                 </div>
                              </div>
                              <div className="row mb-3">
                                 <label htmlFor="contact"  
                                 className="col-md-4 col-form-label text-md-end"> Contacts: </label>
                                 <div className="col-md-8 d-flex">
                                       <select className="col-md-3" title="StdCountry" name="StdCountry" id="code">
                                          <option value="Lesotho">+266 LS</option>
                                          <option value="RSA">+277 SA</option>
                                          <option value="RSA">+267 BTW</option>
                                       </select>
                                       <input className="form-control" type="number" 
                                       name="StdContacts" placeholder="Enter phone number"
                                       id="contact" value={input.StdContacts}
                                       onChange={(e)=>{
                                          handleOnChange(e)
                                       }}></input>
                                 </div>
                                 <small id="contactMessage"></small>
                              </div>
                              <div className="row mb-3">
                                 <label htmlFor="StdEmail"  
                                 className="col-md-4 col-form-label text-md-end">Email: </label>
                                 <div className="col-md-8">
                                       <input className="form-control"  type="Email" 
                                       name="StdEmail" placeholder="Enter your Email address"
                                       id="StdEmail" disabled={(!std) ? false : true} value={input.StdEmail} 
                                       onChange={(e)=>{
                                          handleOnChange(e)
                                       }}></input>
                                       <small id="StdEmailMessage"></small>
                                 </div>
                              </div>

                             {(!std) && (<div className="row mb-3">
                                 <label htmlFor="StdPassword" 
                                 className="col-md-4 col-form-label text-md-end" >Password: </label>
                                 <div className="col-md-8">
                                       <input className="form-control"  type="Password" 
                                       name="StdPassword" placeholder="Enter your Password" 
                                       id="StdPassword"  required value={input.StdPassword} 
                                       onChange={(e)=>{
                                          handleOnChange(e)
                                       }}></input>
                                       <small id="StdPasswordMessage"></small>
                                 </div>
                              </div>)}
                              
                              <div className="row mb-3"> 
                                 <label className="col-md-4 col-form-label text-md-end">Physical Address:</label>                   
                                 <fieldset > 
                                       <div className="row mb-3 "> 
                                          <label htmlFor="StdCountry"  
                                          className="col-md-4 col-form-label text-md-end">Country: </label>
                                 
                                          <div className="col-md-8">
                                             <input className="form-control" type="text" name='StdCountry'
                                             placeholder='Enter Country' value={input.StdCountry}
                                             onChange={(e)=>{
                                                   handleOnChange(e)
                                             }}/>
                                          </div>
                                       </div>
                                       <div className="row mb-3"> 
                                          <label htmlFor="StdCity"  
                                          className="col-md-4 col-form-label text-md-end">City: </label>
                                          <div className="col-md-8">
                                          <input className="form-control" type="text" name='StdCity'
                                          placeholder='Enter City' value={input.StdCity}
                                          onChange={(e)=>{
                                             handleOnChange(e)                                
                                          }}/>
                                          </div>
                                       </div>
                                       <div className="row mb-3"> 
                                       <label htmlFor="StdVillage"  
                                          className="col-md-4 col-form-label text-md-end">Village: </label>
                                       <div className="col-md-8">                     
                                          <input className="form-control" type="text" name='StdVillage'
                                          placeholder='Enter Village' value={input.StdVillage}
                                          onChange={(e)=>{
                                             handleOnChange(e)
                                          }}/>
                                          </div>
                                       </div>                        
                                       <div className="row mb-3">
                                       <label htmlFor="StdZipCode"  
                                          className="col-md-4 col-form-label text-md-end">ZipCode: </label>
                                       <div className="col-md-8">
                                          <input className="form-control" type="text" name='StdZipCode'
                                          placeholder='Enter Zip-Code'
                                          value={input.StdZipCode}
                                          onChange={(e)=>{
                                             handleOnChange(e)
                                             }}/>
                                          </div>
                                       </div>                        
                                 </fieldset>
                              </div>                              
                              <div className="row mb-3">
                                 <button type="submit" className='btn btn-primary'>{(!std) ? 'Update':'Approve'}</button>
                              </div>   
                           </form>)}
                     </div>
                  </div>
               </div>
         </div>
      </div>
   );

}
 
export default UpdateStudentInfo;
