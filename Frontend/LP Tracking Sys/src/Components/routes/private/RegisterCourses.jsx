import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Course from './Course';
import { useEffect } from "react";
import swal from "sweetalert";

let course = [];
const RegisterCourses = ({position}) => {
   const {userId} = useParams();
   const [state,setState] = useState('idle');
   const [courses,setCourses] = useState([]);
   let coursesTaught = [];
   
   const onCheck = (id,state) =>{
      setCourses(courses.map((c)=>
         (c.CCode === id) ? {...c, check : state} : c
      ))
   }
   const getData = async () =>{
      setState('Loading')
      try{
         const res = await axios.get(`http://127.0.0.1:8000/api/Course`)
         //
         course = res.data.course.map((c)=>{
            return {
               CId:c.id,
               CName:c.CName,
               CCode:c.CCode,
               check: false
            }
         })
         setCourses(course);
         console.log(course);          
         setState('loaded');
      }catch(e){
         setState('error')
         console.log(e);
      };
      
  }
   useEffect(()=>{
      if(state === 'idle')
         getData();
   },[state]);
   const createCourses = ()=>{        
      courses.forEach((c)=>{
         if(c.check === true){
               if(coursesTaught.find((course)=>course.CId === c.CId))
                  return 
               if(position === 'student'){
                  coursesTaught.push({
                     StdId: userId,
                     CId : c.CId.toString(),
                  })
               }else{
                  coursesTaught.push({
                     LectId: userId,
                     CId : c.CId.toString(),
                  })
               }
         };
      })
      //console.log(coursesTaught);
   }
   const onSubmit = (e) =>{
      e.preventDefault();

      createCourses();
      //axios.post(`http://127.0.0.1:8000/api/Mark`,coursesTaught)
      
      if(position === 'student'){
         coursesTaught.map(async (c)=>await axios.post(`http://127.0.0.1:8000/api/Mark`,c));
      }
      else if(position === 'lecturer'){
         coursesTaught.map(async (c)=>
         {
               await axios.post(`http://127.0.0.1:8000/api/LecturerCourse`,c).then(res=>{
                  console.log(res)
               }).catch(e=>{                    
                  (e.response.status === 500)&&swal({
                     title:'warning',
                     text:'This course is taken',
                     icon:'warning',
                     button:'OK!'
                  })
               })                    
         });
      }
      courses.map(c=>c.check=false);
      setState('Loaded');        
   }

   return ( 
      <div className="container">
         <div className="row justify-content-center">
               <div className="col-md-6">
                  <div className="card">
                     <div className="card-header">
                           <h1>REGISTER COURSES</h1>
                     </div>
                     <div className="card-body">
                           
                           <form action="" onSubmit={(e)=>onSubmit(e)}>
                              <div className="row mb-3">
                              <label className="col-md-4 col-form-label text-md-end">Coarses:</label> 
                              
                                 {courses.map((c)=>{
                                       return <Course key={c.CCode} onCheck = {onCheck} course={c}/> 
                                 })}                        
                              
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
 
export default RegisterCourses;