import '../../../Css/AdminPanel.css';
import { Outlet, useNavigate, Link } from "react-router-dom";
import logo from "../../../assets/Images/Lp.jpg"
import search from '../../../assets/Images/search.png';
import home from '../../../assets/Images/home.png';
import menu from '../../../assets/Images/menu.png';
import { useState, useEffect } from 'react';
import {buttons}  from "../../../constants/adminContants";
import { useAuth } from "../../AuthProvider";
import getNotifications from "./Admin/notificationAPI";

const AdminPanel = () => {
   const [state, setState] = useState('idle');
   const [notifNumber, setNotifNumber] = useState(0);
   const {data} = useAuth();
   const navigate = useNavigate();
   
   const onSubmit = (e) =>{
      e.preventDefault();
   }
   useEffect(()=>{
      if(state === 'ready'){
         navigate(`/AdminPanel/AdminDashboard`);
         setState('loaded');
      }
   }, [state, navigate, notifNumber]);
   setInterval(getNotifications(setNotifNumber),300000);
   return ( 
      <>       
         <div className="dashboard">
            <div id="sidebar" className="active">
               <div className="sidebar-wrapper active ps ps--active-y">
                     <div className="sidebar-header">
                        <div className="justify-content-center">
                           <div className="logo">
                              <img src={logo} alt='Lp Logo'/>                        
                              <figcaption className="sidebar-info">{data.AdminName}</figcaption>                  
                           </div>              
                        </div>
                     </div>
                     
                     <div className="sidebar-menu">
                        <ul className="menu">
                           <div className="sidebar-title">
                              <img src={menu} width={'15px'} height={'15px'} alt="icon" />
                              <span role={'button'} >Menu</span>
                           </div>
                           <li className="sidebar-item">                            
                              <div className="sidebar-link">
                                 <img src={home} width={'15px'} height={'15px'} alt="icon" />
                                 <span role="button"><Link to={'/'}>Home</Link></span>
                              </div>
                           </li>
                           {
                              buttons.map(({icon,name,id,...rest},index)=>{
                                 return (
                                    <li key={index} className="sidebar-item" {...rest}>
                                       <div className="sidebar-link">
                                          <img src={icon} width={'15px'} height={'15px'} alt="icon" />                                
                                          <span role="button">{name}</span >
                                       </div>
                                       {
                                          (id)&&(id==='Notifications')&&(
                                             <div style={{position:'absolute',top:'1rem',right:'0px',color:'white',borderRadius:'50%',background:'red',height: '0.8rem',
                                                width: '0.8rem',
                                                fontSize: '10px',
                                                textAlign: 'center',
                                                margin: 'auto 0px'}}>{ notifNumber}</div>
                                          )
                                       }
                                    </li>
                                 )})
                           }                          
                           
                        </ul>
                     </div>
                     <button className="sidebar-toggler btn x"><i data-feather="x"></i></button>
                     <div className="ps__rail-x" style={{left: "0px", bottom: "0px"}}>
                        <div className="ps__thumb-x" tabIndex="0" style={{left: "0px", width: "0px"}}></div>
                     </div>
                     <div className="ps__rail-y" style={{top: "0px", height: "5rem", right: "0px"}}>
                        <div className="ps__thumb-y" tabIndex="0" style={{top: "0px", height: "568px"}}></div>
                     </div>
               </div>
            </div>  
               
            <div className="content"> 
               <div className="container m-2 shadow-sm">
                  <nav className="navbar ">
                     <div className="me-auto pt-2 align-items-center" >
                        <p>Menu</p>
                     </div>
                     <form action="" onSubmit={(e)=>onSubmit(e)} style={{overflow:'hidden',borderRadius:'.3rem'}}  className='ms-auto b-n'>
                        <div className="d-flex bg-success" >
                           <input type="search" className="form-control" style={{padding:'0px 4px',height:'2rem'}}  name="search" id="search" />
                              <button className="bg-success b-none" type="submit">
                                 <img src={search} width={'15px'} alt='search' height='15px' role='button'/>
                              </button>
                        </div>
                     </form>
                     <div className="ms-auto d-flex align-items-center" >
                        <img src={logo} width='25px' height={'25px'} alt="logo" />
                        <figcaption className="p-1">admin</figcaption>                        
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

const AdminDashboard = () => {
   return (
      <div className="container">
         hello
      </div>
   )
}
export default AdminPanel;
export {AdminDashboard};

