
function input({course,onCheck}) {
    
   return ( 
      <div className="row mb-3">
         <div className="col-md-6 offset-md-4">
               <div className="form-check">
               <div className="col-md-6">
                     <input type='checkbox' className="form-check-input" 
                     id= {course.CCode} checked = {course.check} 
                     onChange={(e)=>{
                           onCheck(course.CCode,e.currentTarget.checked)
                     }}/>  
                  </div>
                  <label htmlFor={course.CCode} 
                  className="form-check-label">{course.CName}</label>
                  
               </div>
         </div>
      </div>
   );
}

export default input;
/*how a genius makes money*/