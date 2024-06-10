//import Table from './Table'
import { useEffect, useState } from "react";
import Modal from "./Model";
import axios from "axios";
import { useParams } from "react-router-dom";

const Tables = () => {
    const [state, setState] = useState('idle');
    const [students, setStudents] = useState([]);
    const {id} = useParams();
    
    const createFinalMarks = (assignment,test,exam)=>{
        let assign = (!assignment)?0:assignment;
        let test1 = (!test)?0:test;
        let exam1 = (!exam)?0:exam
        //console.log(`${assign},${test1},${exam1}`);
        return Math.floor(0.4 * (assign  + test1)/2 + (0.6 * exam1));
    }

    useEffect(()=>{
        if(state === 'idle'){
            setState('Loading')
            axios.get(`http://127.0.0.1:8000/api/GetStudentsAsLecturer/${id}`).then((res)=>{
                setStudents(res.data.data);
                setState('loaded');
                console.log(res.data.data);
            }).catch((e)=>{
                setState('error')
                console.log(e);
            });
        }
    },[id, state])

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h4>{} Students</h4>
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered table-striped">
                            
                            <thead>
                                <tr>
                                    <th>Student Number</th>
                                    <th>Name</th>
                                    <th>Assignments</th>
                                    <th>Test</th>
                                    <th>Exam</th>
                                    <th>Final Marks</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    (state === 'Loading')?<tr><td>{state}...</td></tr>:
                                        (students.map((std)=>{
                                            return (
                                                <tr key={std.id}>
                                                    <td>{std.StdId}</td>
                                                    <td>{std.StdName}</td>
                                                    <td>{std.Assignment}</td>
                                                    <td>{std.Test}</td>
                                                    <td>{std.Exam}</td>
                                                    <td>{createFinalMarks(std.Assignment,std.Test,std.Exam)}</td>
                                                    <td>
                                                        <Modal student={std}/>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                        )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tables;

