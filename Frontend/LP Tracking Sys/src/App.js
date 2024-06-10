//import { type } from '@testing-library/user-event/dist/type';
import { useContext, useState} from 'react';
import image from './assets/Images/Lp.jpg';
import { Route, Link , Routes, Outlet } from 'react-router-dom';
import {LogIn,Home,RegisterStudent,RegisterLecturer,RegisterAdmin,AdminPanel,AdminDashboard,StudentPanel,LecturerPanel,RegisterCourses,CoursesTable,StudentsTable,LecturersTable,WagesTable,ReportsTable,Messages,Message,Notifications,Tables,Courses,ViewResults,UpdateAdminInfo,UpdateStudentInfo,UpdateLecturerInfo} from './Components/routes/index'
import './Css/Header.css'
import './index.css'
import AuthProvider,{useAuth} from './Components/AuthProvider';
import ProtectedRoutes from './Components/ProtectedRoutes';

const App = () => {  

const [position, setPosition] = useState('');
   return(
      <AuthProvider>
         <Routes>
            <Route element={<Layout/>}>
               <Route index path='/Home' element={<Home/>}/>
               <Route exact path='/' element={<Home/>}/>
               <Route path='*' element={<NoMatch/>}/>
               <Route exact path='/Student' element={<RegisterStudent/> } ></Route>
               <Route exact path='/Lecturer' element={<RegisterLecturer/> } ></Route>
               <Route exact path='/Admin' element={<RegisterAdmin/> } ></Route>
               <Route path='/Login' element={<LogIn setPosition={setPosition} /> } ></Route>
            </Route>
               
               
            <Route path={`/AdminPanel/`} element={<ProtectedRoutes><AdminPanel/></ProtectedRoutes> }>
               <Route path={`/AdminPanel/CoursesTable`} element={<CoursesTable/> }/>          
               <Route path={`/AdminPanel/StudentsTable`} element={<StudentsTable/> }/>          
               <Route path={`/AdminPanel/LecturersTable`} element={<LecturersTable/> }/>          
               <Route path={`/AdminPanel/WagesTable`} element={<WagesTable/> }></Route>          
               <Route path={`/AdminPanel/ReportsTable`} element={<ReportsTable/> }> </Route>         
               <Route path={`/AdminPanel/Messages`} element={<Messages/> }></Route>          
               <Route path={`/AdminPanel/Notifications`} element={<Notifications/> }/>          
               <Route path={`/AdminPanel/UpdateAdminInfo`} element={<UpdateAdminInfo/> }/>          
               <Route path={`/AdminPanel/AdminDashboard`} element={<AdminDashboard/> }/>          
            </Route>

               <Route path={`/StudentPanel/:userId`} element={<ProtectedRoutes><StudentPanel/> </ProtectedRoutes>}> 
               <Route path={`/StudentPanel/:userId/StudentMessages`} element={<Message/> }/> 
               <Route path={`/StudentPanel/:userId/RegisterCourses`} element={<RegisterCourses position={position}/> }/> 
               <Route path={`/StudentPanel/:userId/ViewResults`} element={<ViewResults/> }/> 
               <Route path={`/StudentPanel/:userId/UpdateStudentInfo`} element={<UpdateStudentInfo/> }/> 
               </Route>

               <Route path={`/LecturerPanel/:userId`} element={<ProtectedRoutes><LecturerPanel/></ProtectedRoutes> }> 
               <Route path={`/LecturerPanel/:userId/Table/:id`} element={<Tables/>}></Route>
               <Route path={`/LecturerPanel/:userId/Courses`} element={<Courses/>}></Route>
               <Route path={`/LecturerPanel/:userId/LecturerMessages`} element={<Message/>}></Route>
               <Route path={`/LecturerPanel/:userId/UpdateLecturerInfo`} element={<UpdateLecturerInfo/>}></Route>
               <Route path={`/LecturerPanel/:userId/RegisterCourses`} element={<RegisterCourses position={position}/>}></Route>
               </Route>
         </Routes>
      </AuthProvider>
   );
}

const NoMatch = () =>{

  return (
    <div className="container">
      <p>404 | The is nothing here</p>
    </div>
  )
}
const Layout = () =>{
  const {token} = useAuth()
  const styleLink = {
   textDecoration:'none',
   color:'inherit'
  }

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm" style={{position:'relative',width:'100%'}}>
         <div className="container">
            <div className="navbar-brand ms-auto">
               <img className="m-3" width={"30px"} height={'30px'} src={image} alt="Logo"/>
               <Link to={'/'} className="navbar-brand mt-7" >LP TRACKING SYSTEM</Link>
            </div>               
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav ms-auto">
                  <li className="nav-item" role="button">
                        
                  </li>
               </ul>
               <ul className="navbar-nav ms-auto">
                  <li className="nav-item" role="button">
                        
                  </li>
               </ul>
               <ul className="navbar-nav ms-auto">
                  <li className="nav-item" role="button">
                        
                  </li>
               </ul>
               <ul className="navbar-nav ms-auto">
                  <li className="nav-item" role="button">
                        <Link to='/' className="nav-link active">Home</Link> 
                  </li>
               </ul>
               
            
               <ul className="navbar-nav ms-auto">  
                  <li className=" dropdown ">
                        <Link to={'#'} className="nav-link dropdown-toggle" href="#" 
                        data-toggle="dropdown">
                           Register
                           <span className='caret'></span>
                        </Link>

                        <ul className="dropdown-menu reg row">
                           <li><Link to='/Student' style={styleLink}>Student</Link></li>
                           <li><Link to='/Lecturer' style={styleLink}>Lecturer</Link></li>
                           <li><Link to='/Admin' style={styleLink}>Admin</Link></li>
                        </ul>
                  </li>
                        
               </ul>
               <ul className="navbar-nav ms-auto">
                  <li className="nav-item" role="button">
                  {
                     (token)?<Link to={"/home"}  className="nav-link" >Logout</Link>:
                     <Link to={"/Login"}  className="nav-link" >Login</Link> 
                  }</li>
               </ul>
            </div>
         </div>
      </nav>
         <Outlet/>
   </>
  )
}

export default App;