import { useState, useEffect } from "react";
import { Link , useNavigate, Outlet } from "react-router-dom";
import search from '../../../assets/Images/search.png';
import logo from "../../../assets/Images/Lp.jpg";
import { useAuth } from "../../AuthProvider";

const LecturerPanel = () => {
   const {data} = useAuth()
   const [state,setState] = useState('idle');
   const navigate = useNavigate();

   let buttons=[
      {
         name:'Add Courses',
         icon: '',
         get: ()=>{
               navigate(`/LecturerPanel/RegisterCourses`);
         }
      },
      {
         name:'Messages',
         icon: '',
         get: ()=>{
               navigate(`/LecturerPanel/LecturerMessages`);
         }
      },
      {
         name:'Update Details',
         icon: '',
         get: ()=>{
               navigate(`/LecturerPanel/UpdateLecturerdata`);
         }
      },
      {
         name:'Courses',
         icon: '',
         get: ()=>{
               navigate(`/LecturerPanel/Courses`);
         }
      },
   ];
   
   const onSubmit = (e) =>{

   }

   useEffect(()=>{
   },[state])

   return ( 
      <>
         <div className="dashboard">
            <div id="sidebar" className="active">
               <div className="sidebar-wrapper active ps ps--active-y">
                  {(state === 'loaded')&& (<><div className="sidebar-header">
                        <div className="justify-content-center">
                           <div className="logo">
                              <img src={logo} alt='Lp Logo' />
                           </div>
                           <div className="data">
                              <figcaption className="sidebar-data">{data.LectName}</figcaption>
                           </div>
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
                           {buttons.map((btn) => {
                              return (
                                    <li onClick={btn.get} key={btn.name} className="sidebar-item">
                                       <div className="sidebar-link">
                                          <span role="button">{btn.name}</span>
                                       </div>
                                    </li>
                              );
                           })}

                        </ul>
                     </div>
                     <button className="sidebar-toggler btn x"><i data-feather="x"></i></button>
                     <div className="ps__rail-x" style={{ left: "0px", bottom: "0px" }}>
                        <div className="ps__thumb-x" tabIndex="0" style={{ left: "0px", width: "0px" }}></div>
                     </div>
                     <div className="ps__rail-y" style={{ top: "0px", height: "969px", right: "0px" }}>
                        <div className="ps__thumb-y" tabIndex="0" style={{ top: "0px", height: "568px" }}></div>
                     </div>
                  </>)}
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
                        <figcaption className="p-1">Lecturer <span className='caret'></span></figcaption>                        
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

export default LecturerPanel;