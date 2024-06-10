import {course,students,lecturer,wage,report,message,notification,home,person,menu} from '../assets/index';
import { Link } from 'react-router-dom';
let navigate;




const  buttons = [
   // {
   //    name: <Link to={`/AdminPanel/CoursesTable`} >Menu</Link>,
   //    icon: menu,

   // },
   // {
   //    name:'Home',
   //    icon: home,
   //    get: ()=>{
   //          navigate(`/AdminPanel/CoursesTable`);
   //    }
   // },
   {
      name:<Link to={`/AdminPanel/CoursesTable`}>Courses</Link>,
      icon: course,
   },
   {
      name:<Link to={`/AdminPanel/StudentsTable`}>Students</Link>,
      icon: students,
   },
   {
      name:<Link to={`/AdminPanel/LecturersTable`}>Lecturers</Link>,
      icon: lecturer,
   },
   {
      name:<Link to={`/AdminPanel/WagesTable`}>Wages</Link>,
      icon: wage,
   },
   {
      name:<Link to={`/AdminPanel/ReportsTable`}>Reports</Link>,
      icon: report,
   },
   {
      name:<Link to={`/AdminPanel/UpdateAdminInfo`}>Profile</Link>,
      icon: person,
   },
   {
      name:<Link to={`/AdminPanel/Messages`}>Messages</Link>,
      icon: message,
   },
   {
      id:'Notifications',
      name:<Link to={`/AdminPanel/Notifications`}>Notifications</Link>,
      icon: notification,
      style:{
         position:'relative',
      }
   },
];
 
export{buttons};