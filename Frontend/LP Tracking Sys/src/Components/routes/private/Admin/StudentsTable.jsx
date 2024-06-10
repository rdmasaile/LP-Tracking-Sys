import { useState, useEffect } from "react";
import axios from "axios";
import Modal  from "react-bootstrap/Modal";
import ViewResults from "../Student/ViewResults";

const StudentsTable = () => {
   const [students,setStudents] = useState([]);
   const [state, setState] = useState('idle');

   const approve = async (std) => {
      std.State = 'Approve';
      axios.put(`/api/Student/${std.id}`,std).catch(e=>console.error(e));
      console.log();
      setState('idle')
   }

   const getData = ()=>{
      
      setState('Loading')
      axios.get(`/api/Student`).then(({data})=>{ 
         setStudents(data); 

         setState('Loaded');
      }).catch((e)=>{
         setState('error')
         console.log(e);
      });
      
   }
   useEffect(()=>{
      if(state === 'idle')
         getData();
   },[state])
   if(state=== 'error'){
      return <div style={{color:'red'}}> Error when fetching Data</div>
   }
   return ( 
      <>
         <div className="row">
         <div className="col-md-12">
               <div className="card">
                  <div className="card-header d-flex">
                     <h4 className="mt-3">Students</h4>
                     
                  </div>
                  <div className="card-body">
                     <table className="table table-bordered table-striped">
                           
                           <thead>
                              <tr>
                                 <th>Student Name</th>
                                 <th>Student #</th>
                                 <th>Date of Birth</th>
                                 <th>Phone Number</th>
                                 <th>Student Email</th>
                                 <th>Country</th>
                                 <th>City</th>
                                 <th>Village</th>
                                 <th>Zip Code</th>
                                 <th>Actions</th>
                              </tr>
                           </thead>
                           <tbody>
                              {
                                 (state === 'Loading')? <div>{state}...</div> : (state === 'Loaded')&&(students.map((std,index)=>{
                                       return (
                                          <tr key={index}>
                                             <td>{std.StdName}</td>
                                             <td>{std.StdNumber}</td>
                                             <td>{std.StdDateOfBirth}</td>
                                             <td>{std.StdContacts}</td>
                                             <td>{std.StdEmail}</td>
                                             <td>{std.StdCountry}</td>
                                             <td>{std.StdCity}</td>
                                             <td>{std.StdVillage}</td>
                                             <td>{std.StdZipCode}</td>
                                             <td className="btn-group">
                                                <Model std = {std}/>
                                                {
                                                   (std.State === 'New')? <button onClick={()=>{approve(std)}} className='btn btn-success'>Approve</button>:''
                                                }
                                                <button onClick={()=>{approve(std)}} className='btn btn-danger'>Remove</button>
                                             </td>
                                          </tr>
                                       )
                                 }))
                              }
                           </tbody>
                     </table>
                  </div>
               </div>
         </div>
      </div>
      </>
   );
}

const Model = ({std}) => {
    
   const [isOpen, setIsOpen] = useState(false);

   const showModal = ()=>{
      setIsOpen(true);
   }
   const hideModal = ()=>{
      setIsOpen(false);
   }   
      
   return ( 
      <>
         <button onClick={showModal} className='btn btn-primary'>Marks</button>
         <Modal show={isOpen} onHide={hideModal} size = 'lg' >               
            <Modal.Body>
               <ViewResults std={std}/>
            </Modal.Body>
            
            <Modal.Footer>
               <button onClick={hideModal} className='btn btn-primary'>Cancel</button>
            </Modal.Footer>
         </Modal>
      </>
   );
}
 
export default StudentsTable;