import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const Courses = ()=>{

    const [state, setState] = useState('idle');
    const [buttons, setButtons] = useState([]);
    const navigator = useNavigate();

    const {userId} = useParams();
    if(state === 'idle'){
        axios.get(`http://127.0.0.1:8000/api/LecturerCourse/${userId}`).then((response)=>{
                    //console.log(response.data.data);
                    response.data.data.map((c)=>{
                        const btn = ({
                            name: c.CName,
                            get:()=>{
                                navigator(`/LecturerPanel/${userId}/Table/${c.id}`)
                            }
                        });
                        if(!buttons.find((b)=>b.CName === btn.name))
                        buttons.push(btn)
                        /*setButtons({
                            ...buttons,btn
                        })*/
                    })
                    setState('loaded');
                }).catch((e)=>{
                    console.error(e);
                    setState('error');
                })
    }
    return (
        <>
        {
        buttons.map((btn)=>{
            return (
                <button onClick={btn.get} key={btn.name} className="btn btn-primary m-2">
                    <div className="sidebar-link">                                
                        <span role="button">{btn.name}</span >
                    </div>
                </button>
            )})
}               
        </>
    )
} 
export default Courses;