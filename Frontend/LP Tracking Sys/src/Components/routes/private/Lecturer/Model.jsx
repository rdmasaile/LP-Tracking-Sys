import Modal  from "react-bootstrap/Modal";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
const Model = ({student}) => {
    const std = {  
        StdId:student.StdId.toString(),
        CId:student.CId.toString(),      
        Assignment:(!student.Assignment=== null)?student.Assignment:0,
        Test:(!student.Test===null)?student.Test:0,
        Exam:(!student.Exam === null)?student.Exam:0
    }
    
    const [isOpen, setIsOpen] = useState(false);
    const [state, setState] = useState(std);
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
        
        axios.put(`http://127.0.0.1:8000/api/Mark/${state.StdId}`,state).then((res)=>{
            if(res.data.status === 200){
                swal({
                    title:'success',
                    icon:'success',
                    text:`${res.data.message}`,
                    buttons:'OK!'
                });
            }
        }).catch(e)
            console.error(e);    
            
        
    }
    return ( 
        <>
            <button onClick={showModal} className='btn btn-primary'>Edit</button>
            <Modal show={isOpen} onHide={hideModal} >
                <Modal.Header>
                    <p>Update {student.StdName}'s results </p>
                    <p>Student Number: {student.StdId}</p>
                </Modal.Header>
                <form action="" onSubmit={(e)=>onSubmit(e)}>
                <Modal.Body>
                                        
                        <div className="row mb-3">
                            <label htmlFor="Assignment" 
                            className="col-md-4 col-form-label text-md-end">Assignment:</label>
                            <div className="col-md-6">							
                                <input className="form-control" type="number" 
                                    name="Assignment" id="Assignment" placeholder="Enter Assignment marks"
                                    value={state.Assignment} 
                                    onChange={(e)=>{
                                        handleOnChange(e)
                                    }}></input>
                                <small id="NameMessage"></small>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="Test" 
                            className="col-md-4 col-form-label text-md-end">Test:</label>
                            <div className="col-md-6">							
                                <input className="form-control" type="number" 
                                    name="Test" id="Test" placeholder="Enter Test marks"
                                    value={state.Test} 
                                    onChange={(e)=>{
                                        handleOnChange(e)
                                    }}></input>
                                <small id="NameMessage"></small>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="Exam" 
                            className="col-md-4 col-form-label text-md-end">Exam:</label>
                            <div className="col-md-6">							
                                <input className="form-control" type="number" 
                                    name="Exam" id="Exam" placeholder="Enter Exam Marks"
                                    value={state.Exam} 
                                    onChange={(e)=>{
                                        handleOnChange(e)
                                    }}></input>
                                <small id="NameMessage"></small>
                            </div>
                        </div>
                    
                </Modal.Body>
                
                <Modal.Footer>
                    <button onClick={hideModal} className='btn btn-primary'>Cancel</button>
                    <button type="submit" className='btn btn-primary'>Update</button>
                </Modal.Footer>
                </form>
            </Modal>
        </>
     );
}
 
export default Model;