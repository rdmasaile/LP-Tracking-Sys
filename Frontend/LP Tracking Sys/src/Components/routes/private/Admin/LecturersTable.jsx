import { useState } from "react";
import axios from "axios";
import Modal  from "react-bootstrap/Modal";

const LecturerTable = () => {
   const [lecturers,setLecturers] = useState([
   ]);
   const [state, setState] = useState('idle');

   const approve = async (lect) => {
      lect.State = 'Approve';
      axios.put(`http://127.0.0.1:8000/api/Lecturer/${lect.id}`,lect).catch(e=>console.error(e));
      console.log();
      setState('idle')
   }

   
   if(state === 'idle'){
      setState('Loading')
      axios.get(`http://127.0.0.1:8000/api/Lecturer`).then((res)=>{ 
         setLecturers(res.data);          
         setState('loaded');
      }).catch((e)=>{
         setState('error')
         console.log(e);
      });
   }
   
   if(state=== 'error'){
      return <div style={{color:'red'}}> Error when fetching Data</div>
   }
   return ( 
      <>
         <div className="row">
         <div className="col-md-12">
            <div className="card">
               <div className="card-header d-flex">
                  <h4 className="mt-3">Lecturers</h4>
                  
               </div>
               <div className="card-body">
                  <table className="table table-bordered table-striped">
                     
                     <thead>
                        <tr>
                           <th>Lecturer Name</th>
                           <th>Lecturer #</th>
                           <th>Date of Birth</th>
                           <th>Phone Number</th>
                           <th>Lecturer Email</th>
                           <th>Country</th>
                           <th>City</th>
                           <th>Village</th>
                           <th>Zip Code</th>
                           <th>Salary</th>
                           <th>Actions</th>
                        </tr>
                     </thead>
                     <tbody>
                        {
                           (state === 'Loading')? <div>{state}...</div> : (lecturers.map((lect)=>{
                              return (
                                 <tr key={lect.LectNumber}>
                                    <td>{lect.LectName}</td>
                                    <td>{lect.LectNumber}</td>
                                    <td>{lect.LectDateOfBirth}</td>
                                    <td>{lect.LectContacts}</td>
                                    <td>{lect.LectEmail}</td>
                                    <td>{lect.LectCountry}</td>
                                    <td>{lect.LectCity}</td>
                                    <td>{lect.LectVillage}</td>
                                    <td>{lect.LectZipCode}</td>
                                    <td>{lect.LectSalary}</td> 
                                    <td className="btn-group">
                                    {/* <Model lect = {lect}/> */}
                                    {
                                       (lect.State === 'New')? <button onClick={()=>{approve(lect)}} className='btn btn-success'>Approve</button>:''
                                    }
                                    <button onClick={()=>{approve(lect)}} className='btn btn-danger'>Remove</button>
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
 
// const Model = ({lect}) => {
    
//    const [isOpen, setIsOpen] = useState(false);

//    const showModal = ()=>{
//       setIsOpen(true);
//    }
//    const hideModal = ()=>{
//       setIsOpen(false);
//    }   
      
//    return ( 
//       <>
//          <button onClick={showModal} className='btn btn-primary'>Marks</button>
//          <Modal show={isOpen} onHide={hideModal} size = 'lg' >               
//             <Modal.Body>
//                <ViewResults lect={lect}/>
//             </Modal.Body>
            
//             <Modal.Footer>
//                <button onClick={hideModal} className='btn btn-primary'>Cancel</button>
//             </Modal.Footer>
//          </Modal>
//       </>
//    );
// }
export default LecturerTable;