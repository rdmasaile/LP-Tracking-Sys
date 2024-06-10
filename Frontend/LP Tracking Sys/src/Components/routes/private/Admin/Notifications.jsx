import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import person from '../../../../assets/Images/person.png';
import Modal  from "react-bootstrap/Modal";
import UpdateStudentInfo from "../Student/UpdateStudentInfo";

const Notifications = () => {

   return ( 
      <>
         <Model/>
      </>
   );
}
const Model = () => {
   const [state, setState] = useState('idle');
   const [isOpen, setIsOpen] = useState(true);
   const [notification, setNotification] = useState([]);  

   const showModal = ()=>{
      setIsOpen(true);
   }
   const hideModal = ()=>{
      setIsOpen(false);
   }   
   const getData = () =>{
      setState('Loading')
      axios.get(`http://127.0.0.1:8000/api/Notification`).then(({data})=>{
         setNotification(data);
         console.log(data);
         setState('Loaded')
      }).catch((e)=>console.error(e));
   }
   useEffect(()=>{
      if(state === 'idle')
         getData();
   })  
   return ( 
      <>
         <Modal show={isOpen} onHide={hideModal} size='sm'>               
            <Modal.Body>
               <div className="container justify-content-center">
                  {
                     notification.map((notif)=>{
                        return notif.map((ntf,index) => <Notification key={index} message={`Approve Registeration for ${(ntf.LectName)?ntf.LectName:ntf.StdName}`} data={ntf}/>)
                     })
                  }
               </div>               
            </Modal.Body>
            
            <Modal.Footer>
               <button onClick={hideModal} className='btn btn-primary'>Cancel</button>
            </Modal.Footer>
         </Modal>
      </>
   );
}

const Notification = ({message,data}) =>{
   const view = (data)=>{
      return <View data={data} />
   }
   return(
      <>
         <div className="container bd-r-1 bg-blur-dark m-1 p-2">
            <div className="d-flex h-3">
               <img src={person} alt="icon" />
               <figcaption>{message}</figcaption>
            </div>
            <div className="d-flex me-auto">
               <button className="btn btn-primary" onClick={()=>{view(data)}}>View</button>
               <button className="btn btn-danger">Remove</button>
            </div>
         </div >
      </>
   )
}

const View = ({data}) => {
   const [isOpen, setIsOpen] = useState(true);

   const hideModal = ()=>{
      setIsOpen(false);
   }   
   console.log(data);
   return ( 
      <>
         <Modal show={isOpen} onHide={hideModal} size='sm'>               
            <Modal.Body>
               <div className="container justify-content-center">
                  {
                     (data.StdId)?<UpdateStudentInfo std={data}/>:''
                  }
               </div>               
            </Modal.Body>
            
            <Modal.Footer>
               <button onClick={hideModal} className='btn btn-primary'>Cancel</button>
            </Modal.Footer>
         </Modal>
      </>
   );
}
export default Notifications;