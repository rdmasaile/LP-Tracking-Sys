//import { useState } from "react";
import {  Outlet } from "react-router-dom";
//import search from '../../Images/search.png';
import { useAuth } from "../../AuthProvider";

const Home = (props) => {
   // const navigate = useNavigate();
   const {Logout} = useAuth()
   Logout();
   //const [state, setState] = useState('idle');
   // const [buttons, setButtons] = useState([
   //    {
   //       name:'Courses',
   //       get: ()=>{
   //             return navigate(`/Home/Courses`);
   //       }
   //    },
   //    {
   //       name:'Almanac',
   //       get: ()=>{
   //             return navigate(`/Home/Courses`);
   //       },
   //    }
   // ]);
   return ( 

      <div className="content">                 
         
         <div className="container">                        
            {/* <Outlet/>                         */}
         </div>
      </div> 
      
   );
}
 
export default Home;