import logo from "../../../assets/Images/Lp.jpg"
import search from "../../../assets/Images/search.png"
import { useNavigate, useParams, Outlet, Link } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from 'axios'

let info;
const StudentPanel = () => {
   const { userId } = useParams()
   const [state, setState] = useState('idle');
   const navigate = useNavigate();
   const buttons = [
      {
         name:'Add Courses',
         get: ()=>{
               navigate(`/StudentPanel/${userId}/RegisterCourses`);
         }
      },
      {
         name:'View Results',
         get: ()=>{
               navigate(`/StudentPanel/${userId}/ViewResults`);
         }
      },
      {
         name:'Courses',
         get: ()=>{
               navigate(`/StudentPanel/${userId}/Courses`);
         }
      },
      {
         name:'Update Details',
         get: ()=>{
               navigate(`/StudentPanel/${userId}/UpdateStudentInfo`);
         }
      },
   ]
   const onSubmit = (e) =>{

   }
   const getData = ()=>{      
      setState('Loading')
      axios.get(`http://127.0.0.1:8000/api/Student/${userId}`).then((res)=>{ 
         info = res.data;                     
         setState('loaded');
      }).catch((e)=>{
         setState('error')
         console.log(e);
      });
      
   }
   useEffect(()=>{
      if(state === 'idle')
         getData();
   },[state,userId])
   return ( 
      <>
      <div className="dashboard">
         <div id="sidebar" className="active">
               <div className="sidebar-wrapper active ps ps--active-y">
                  <div className="sidebar-header">
                     <div className="justify-content-center">
                           <div className="logo">
                              <img src={logo} alt='Lp Logo'/>
                           </div> 

                           {(state === 'loaded')&&(<div className="info">
                              <div className="sidebar-info">{info.StdName}</div>                  
                              <div className="sidebar-info">{info.StdNumber}</div>   
                           </div> )}             
                     </div>
                  </div>
                  <div className="sidebar-menu">
                     <ul className="menu">
                           <div className="sidebar-title">Menu</div>
                           <li className="sidebar-item">                            
                              <div className="sidebar-link">
                                 <span role="button"><Link to={'/'}>Home</Link></span>
                              </div>
                           </li>
                           {
                              buttons.map(btn=>{
                                 return (
                                    <li onClick={btn.get} key={btn.name} className="sidebar-item">
                                       <div className="sidebar-link">                                
                                             <span role="button">{btn.name}</span >
                                       </div>
                                    </li>
                                 )})
                           }                          
                           
                     </ul>
                  </div>
                  <button className="sidebar-toggler btn x"><i data-feather="x"></i></button>
                  <div className="ps__rail-x" style={{left: "0px", bottom: "0px"}}>
                     <div className="ps__thumb-x" tabIndex="0" style={{left: "0px", width: "0px"}}></div>
                  </div>
                  <div className="ps__rail-y" style={{top: "0px", height: "969px", right: "0px"}}>
                     <div className="ps__thumb-y" tabIndex="0" style={{top: "0px", height: "568px"}}></div>
                  </div>
               </div>
         </div>

         <div className="space">

         </div>
            
         <div className="content"> 
            <div className="container m-2 shadow-sm">
               <nav className="navbar ">
                  <div className="me-auto pt-2 align-items-center" >
                     <p>Menu</p>
                  </div>
                  <form action="" onSubmit={(e)=>onSubmit(e)} height={'15px'} className='ms-auto'>
                     <div className="input-group bg-success" >
                        <input type="search" className="form-control col-6" height={'15px'} name="search" id="search" />
                        <div className="input-group-btn">
                           <button className="btn btn-default" type="submit">
                              <img src={search} width={'15px'} alt='search' height='15px' role='button'/>
                           </button>
                        </div>                            
                     </div>
                  </form>
                  <div className="ms-auto pt-2 d-flex align-items-center" >
                     <img src={logo} width='25px' height={'25px'} alt="logo" />
                     <figcaption className="p-1">Student <span className='caret'></span></figcaption>                        
                  </div>
               </nav>
            </div>
            <div className="container" >                                                      
               <Outlet/>                        
            </div>
         </div> 
      </div>
      </>
   );
}

export default StudentPanel;