import axios from "axios";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import swal from "sweetalert";
import { useAuth } from "../../AuthProvider";

const LogIn = (props) => {
   const {Login} = useAuth();
   const [Email, setEmail] = useState('');
   const [Password, setPassword] = useState('');
   const navigate = useNavigate();

   const onSubmit = async (e) =>{
      e.preventDefault();
      if(!Email||!Password)
         return
      const loginDetails = {
         Email,
         Password
      }
      try{
         const response = await axios.post("/api/Login1",loginDetails);
         setEmail('');
         setPassword('');
         if(response.data.status === 401){
            swal({
               title:'error',
               text:response.data.message,
               icon:'error',
               button:'OK!'
            });
            return;
         }

         if (response.data.data.State === 'New') {
            swal({
               title:'Warning',
               text:'Not Approved',
               icon:'warning',
               button:'OK! '
            });
            return;
         }
         
         swal({
            title:'success',
            text:response.data.message,
            icon:'success',
            button:'OK! '
         });
         const data = response.data.data;
         const token = response.data.token;
         Login({token,data});//set Token from API
 

         props.setPosition(response.data.position);// set the position of the logged user

         if(response.data.position === 'student')
            navigate(`/StudentPanel/${data.id}`);//Navigate to student panel
            
         else if(response.data.position === 'lecturer')
            navigate(`/LecturerPanel/${data.id}`); //Navigate to Lecturer panel
         else
            navigate(`/AdminPanel`); //Navigate to Admin panel
         setEmail('');
         setPassword('');
         
      }catch(e){
         swal({
            title:'error',
            text:'Something went wrong',
            icon:'error',
            button:'OK!'
         });
         console.log(e);
      }
      
   }
   return (  
   <>
      <div className="container-lg">
         <div className="row justify-content-center">
            <div className="col-md-6">
               <div className="card">
                  <div className="card-header d-flex">
                        <h1>LogIn</h1>
                        <Link to="/" className="btn btn-primary ms-auto btn-xs p-3"> Back </Link>
                  </div>

                  <div className="card-body">
                     <form method="POST" onSubmit={(e)=>onSubmit(e)} action="">
                        
                        <div className="row mb-3">
                           <label htmlFor="email" 
                           className="col-md-4 col-form-label text-md-end">Email Address</label>

                           <div className="col-md-6">
                                 <input id="Email" type="email" 
                                 className="form-control" 
                                 name="Email"  onChange={(e)=>setEmail(e.target.value)} 
                                 value={Email} required autoComplete="Email" autoFocus/>
                           
                                 <span className="invalid-feedback" role="alert">
                                    <strong></strong>
                                 </span>
                              
                           </div>
                        </div>

                        <div className="row mb-3">
                           <label htmlFor="password" 
                           className="col-md-4 col-form-label text-md-end">Password</label>

                           <div className="col-md-6">
                                 <input id="password" type="password" 
                                 className="form-control" 
                                 name="password" onChange={(e)=>setPassword(e.target.value)} 
                                 value={Password} required autoComplete="current-password"/>                                        
                                 <span className="invalid-feedback" role="alert">
                                    <strong></strong>
                                 </span>                                    
                           </div>
                        </div>

                        <div className="row mb-3">
                           <div className="col-md-6 offset-md-4">
                                 <div className="form-check">
                                    <input className="form-check-input" type="checkbox" 
                                    name="remember" id="remember"/>

                                    <label className="form-check-label" htmlFor="remember">
                                       Remember Me
                                    </label>
                                 </div>
                           </div>
                        </div>
                        <div className="row card-footer mb-0">
                           <div className="col-md-8 offset-md-4">
                                 <button type="submit" className="btn btn-primary">
                                    Login
                                 </button>                                        
                                 <a className="btn btn-link" href="h">
                                    Forgot Your Password
                                 </a>                                        
                           </div>
                        </div>
                        
                     </form>
               
                  </div>
               </div>
            </div>
         </div>

      </div>
      <Outlet/>
      </>
   );
}
 
export default LogIn;
