import Modal  from "react-bootstrap/Modal";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import Course from './Course'
 
const FormModal = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [state, setState] = useState({

    });
    const showModal = ()=>{
        setIsOpen(true);
    }
    const hideModal = ()=>{
        setIsOpen(false);
    }
    const handleOnChange = (e) =>{
        setState({
            ...state,[e.target.name]:e.target.value
        })
    }
    const onSubmit = async (e) =>{
        e.preventDefault();
        console.log(state);
        
        try{
            const res = await axios.put(`http://127.0.0.1:8000/api`,state);
            if(res.data.status === 200){
                swal({
                    title:'success',
                    icon:'success',
                    text:`${res.data.message}`,
                    buttons:'OK!'
                })
                //console.log(res);
            }
        }catch(e){
            console.error(e);
        }
    }
    const onCheck = ()=>{

    }
    return ( 
        <>
            <button onClick={showModal} className='btn btn-primary'>Edit</button>
            <Modal show={isOpen} onHide={hideModal} >
                <Modal.Header>
                    <p>Update 's results </p>
                    <p>Student Number: </p>
                </Modal.Header>
                <Modal.Body>
                    <form action="" onSubmit={(e)=>onSubmit(e)}>                    
                        <div className="row mb-3">
                        <div className="row mb-3">
                                    <label className="col-md-4 col-form-label text-md-end">courses:</label> 
                                    
                                        {props.courses.map((c)=>{
                                            return <Course key={c.courseCode} onCheck = {onCheck} course={c}/> 
                                        })}                        
                                    
                        </div>
                        </div>
                        <div className="row mb-3">
                            <button type="submit" className='btn btn-primary'>Update</button>
                        </div> 
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={hideModal} className='btn btn-primary'>Cancel</button>
                </Modal.Footer>
            </Modal>
        </>
     );
}
 
export default FormModal;