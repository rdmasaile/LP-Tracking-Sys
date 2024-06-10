import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ViewResults = ({std}) => {
   const [state, setState] = useState('idle');
   const {userId} = useParams();
   const [marks, setMarks] = useState([]);
   let sum = 0;

   const createSum = (value)=>{
      sum += value;
   }
   const getAverage = ()=>{

      marks.forEach(({FinalM})=> {         
         createSum(Number(FinalM))
      })
      console.log(sum);
      return Math.floor((sum === 0)?0:sum/marks.length);
   }

   const createFile = ()=>{
      console.log('file downloaded')
   }
   const getData = async ()=>{
      try{
         setState('Loading');
         const res = await axios.get(`http://127.0.0.1:8000/api/Mark/ViewResults/${std ? std.id : userId}`);
         setMarks(res.data);
         console.log(res.data);
         setState('Loaded');
      }catch(e){
         console.error(e);
         setState('error');
      }
      
   }
   useEffect(()=>{
      if(state === 'idle')
         getData();
   },[state, userId, marks])
   return ( 
      <>
         <hr></hr>

         <div className="row">
         <div className="col-md-12">
            <div className="card">
               <div className="card-header">
               <h1>SCHOOL OF ENGINEERING AND TECHNOLOGY</h1>
               {(state === 'Loaded')&& (
                  <div>
                     <p>Academic Report for: {std ? std.StdName:marks[0].StdName}</p>
                     <p>Student Number: {std ? std.StdNumber :marks[0].StdNumber}</p>
                  </div>
                  )}
               </div>
               <div className="card-body">
                  <table className="table table-bordered table-striped">
                        
                     <thead>
                        <tr>
                           <th>Course Code</th>
                           <th>Course Name</th>
                           <th>Assignments</th>
                           <th>Test</th>
                           <th>Exam</th>
                           <th>Final Marks</th>
                        </tr>
                     </thead>
                     {(state === 'Loading')?<tbody><tr><td>{state}...</td></tr></tbody>:(<tbody>                                
                           
                        {(!marks)? <tr><td>No Courses Enrolled</td></tr> :(marks.map((mark)=>{
                           return (
                              <tr key={mark.CCode}>
                                    <td>{mark.CCode}</td>
                                    <td>{mark.CName}</td>
                                    <td>{mark.Assignment}</td>
                                    <td>{mark.Test}</td>
                                    <td>{mark.Exam}</td>
                                    <td>{mark.FinalM}</td>
                              </tr>
                           )
                        })
                        )}                                
                        <tr>
                              <td>Average Marks</td>
                              <td>{getAverage()}</td>       
                        </tr>                                   
                     </tbody>)}
                  </table>
                  <div className="card-footer">
                     <button className="btn btn-primary" onClick={()=>{createFile()}}>Download</button>
                  </div>
               </div>
            </div>
         </div>
      </div> 
      </>
   );
}
 
export default ViewResults;