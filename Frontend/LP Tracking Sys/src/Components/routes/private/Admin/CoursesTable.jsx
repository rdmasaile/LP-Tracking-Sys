import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


const CoursesTable = () => {
    const [courses,setCourses] = useState([]);
    const [state, setState] = useState('idle');
    const {userId} = useParams();

    const onClick = (name) => {
        console.log(name);
        if(name==='delete'){
            axios.delete(`http://127.0.0.1:8000/api/Course/${userId}`).then((res)=>{ 
            
            console.log(res.data);          
            setState('loaded');
            }).catch((e)=>{
                setState('error')
                console.log(e);
            });
        }
    }
    
    if(state === 'idle'){
        setState('Loading')
        axios.get(`http://127.0.0.1:8000/api/Course`).then((res)=>{ 
            setCourses(res.data.course);
            console.log(res.data);          
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
                        <h4 className="mt-3">Courses</h4>
                        <AddModal />
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered table-striped">
                            
                            <thead>
                                <tr>
                                    <th>Course Name</th>
                                    <th>Course Code</th>
                                    <th># Students doing</th>
                                    <th>Min Number</th>
                                    <th>Max Number</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    (state === 'Loading')? <tr><td>{state}...</td></tr> : (
                                       courses.map((c)=>{
                                        return (
                                            <tr key={c.CCode}>
                                                <td>{c.CName}</td>
                                                <td>{c.CCode}</td>
                                                <td>{c.StdDoing}</td>
                                                <td>{c.CMin}</td>
                                                <td>{c.CMax}</td>
                                                <td >
                                                    <div className="btn-group">
                                                        <UpdateModal course={c}/>
                                                        <button type='button' onClick={()=>onClick('delete')} className="btn btn-danger">Delete</button>  
                                                    </div>                                                    
                                                    
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
 
const AddModal = () => {
    const [inputs, setInputs] = useState({
        CCode:'',
        CName:'',
        CMin:'',
        CMax:''
    });
    const [isOpen, setIsOpen] = useState(false);
    const showModal = ()=>{
        setIsOpen(true);
    }
    const hideModal = ()=>{
        setIsOpen(false);
    }
    const handleOnChange = (e) =>{
        setInputs({
            ...inputs,[e.target.name]:e.target.value
        })
    }
    const onSubmit = async (e) =>{
        e.preventDefault();
        if(!inputs.CCode||!inputs.CName||!inputs.CMin||!inputs.CMax)
            return
        console.log(inputs);
        
        
        await axios.post(`http://127.0.0.1:8000/api/Course`,inputs).then((res)=>{
            if(res.data.status === 200){
                swal({
                    title:'success',
                    icon:'success',
                    text:`${res.data.message}`,
                    buttons:'OK!'
                })

            }
        }).catch(e=>{
            swal({
                title:'error',
                icon:'error',
                text:'Error when submitting Data',
                buttons:'OK!'
            })
        })
        
    }

    return ( 

        <>
        <button onClick={showModal} className="btn btn-primary ms-auto btn-xs p-3">Add Course</button>
            <Modal show={isOpen} onHide={hideModal} >
                <Modal.Header>
                    <p>Add Course</p>
                </Modal.Header>
                <Modal.Body>
                    <form action="" onSubmit={(e)=>onSubmit(e)}>                    
                        <div className="row mb-3">
                            <label htmlFor="CCode" 
                            className="col-md-4 col-form-label text-md-end">CCode:</label>
                            <div className="col-md-6">							
                                <input className="form-control" type="text" 
                                    name="CCode" id="CCode" placeholder="Enter Course Code"
                                    value={inputs.CCode} 
                                    onChange={(e)=>{
                                        handleOnChange(e)
                                    }}></input>
                                <small id="NameMessage"></small>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="CName" 
                            className="col-md-4 col-form-label text-md-end">CName:</label>
                            <div className="col-md-6">							
                                <input className="form-control" type="text" 
                                    name="CName" id="CName" placeholder="Enter Course Name"
                                    value={inputs.CName} 
                                    onChange={(e)=>{
                                        handleOnChange(e)
                                    }}></input>
                                <small id="NameMessage"></small>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="CMin" 
                            className="col-md-4 col-form-label text-md-end">CMin:</label>
                            <div className="col-md-6">							
                                <input className="form-control" type="number" 
                                    name="CMin" id="CMin" placeholder="Enter Minimum Number"
                                    value={inputs.CMin} 
                                    onChange={(e)=>{
                                        handleOnChange(e)
                                    }}></input>
                                <small id="NameMessage"></small>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="CMax" 
                            className="col-md-4 col-form-label text-md-end">CMax:</label>
                            <div className="col-md-6">							
                                <input className="form-control" type="number" 
                                    name="CMax" id="CMax" placeholder="Enter Maximum Number"
                                    value={inputs.CMax} 
                                    onChange={(e)=>{
                                        handleOnChange(e)
                                    }}></input>
                                <small id="NameMessage"></small>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={hideModal} className='btn btn-primary'>Cancel</button>
                    <button  onClick={(e)=>onSubmit(e)} type="submit" className='btn btn-primary'>Save</button>
                </Modal.Footer>
            </Modal>
            </>
     );
}
const UpdateModal = ({course}) => {
    const [inputs, setInputs] = useState(course);

    const [isOpen, setIsOpen] = useState(false);
    const showModal = ()=>{
        setIsOpen(true);
    }
    const hideModal = ()=>{
        setIsOpen(false);
    }
    const handleOnChange = (e) =>{
        setInputs({
            ...inputs,[e.target.name]:e.target.value
        })
    }
    const onSubmit = async (e) =>{
        e.preventDefault();
        if(!inputs.CCode||!inputs.CName||!inputs.CMin||!inputs.CMax)
            return
        console.log(inputs);
        
        
        await axios.put(`http://127.0.0.1:8000/api/Course/${course.id}`,inputs).then((res)=>{
            if(res.data.status === 200){
                swal({
                    title:'success',
                    icon:'success',
                    text:`${res.data.message}`,
                    buttons:'OK!'
                })
            }
        }).catch(e=>{
            console.error(e)
            swal({
                title:'error',
                icon:'error',
                text:'Error when submitting Data',
                buttons:'OK!'
            })
        })
        
    }
    return ( 
        <>
        <button onClick={showModal} className='btn btn-primary'>Edit</button>
            <Modal show={isOpen} onHide={hideModal} >
                <Modal.Header>
                    <p>Update  results </p>
                    <p>Student Number: </p>
                </Modal.Header>
                <Modal.Body>
                    <form action="" onSubmit={(e)=>onSubmit(e)}>                    
                        <div className="row mb-3">
                            <label htmlFor="CCode" 
                            className="col-md-4 col-form-label text-md-end">CCode:</label>
                            <div className="col-md-6">							
                                <input className="form-control" type="text" 
                                    name="CCode" id="CCode" placeholder="Enter Course Code"
                                    value={inputs.CCode} 
                                    onChange={(e)=>{
                                        handleOnChange(e)
                                    }}></input>
                                <small id="NameMessage"></small>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="CName" 
                            className="col-md-4 col-form-label text-md-end">CName:</label>
                            <div className="col-md-6">							
                                <input className="form-control" type="text" 
                                    name="CName" id="CName" placeholder="Enter Course Name"
                                    value={inputs.CName} 
                                    onChange={(e)=>{
                                        handleOnChange(e)
                                    }}></input>
                                <small id="NameMessage"></small>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="CMin" 
                            className="col-md-4 col-form-label text-md-end">CMin:</label>
                            <div className="col-md-6">							
                                <input className="form-control" type="number" 
                                    name="CMin" id="CMin" placeholder="Enter Minimum Number"
                                    value={inputs.CMin} 
                                    onChange={(e)=>{
                                        handleOnChange(e)
                                    }}></input>
                                <small id="NameMessage"></small>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="CMax" 
                            className="col-md-4 col-form-label text-md-end">CMax:</label>
                            <div className="col-md-6">							
                                <input className="form-control" type="number" 
                                    name="CMax" id="CMax" placeholder="Enter Maximum Number"
                                    value={inputs.CMax} 
                                    onChange={(e)=>{
                                        handleOnChange(e)
                                    }}></input>
                                <small id="NameMessage"></small>
                            </div>
                        </div>
                    
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={hideModal} className='btn btn-primary'>Cancel</button>
                    <button  onClick={(e)=>onSubmit(e)} type="submit" className='btn btn-primary'>Update</button>
                </Modal.Footer>
            </Modal>
            </>
     );
}
 

export default CoursesTable;