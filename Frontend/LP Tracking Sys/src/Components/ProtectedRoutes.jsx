import { useAuth } from "./AuthProvider";
import {Navigate,useLocation} from 'react-router-dom';

const ProtectedRoutes = ({children}) => {
    const location = useLocation();
    const {token} = useAuth();

    if(!token){
       return <Navigate to={'/home'} replace state={{from:location}}/>
    }else
        return children;
    
    
}
 
export default ProtectedRoutes;