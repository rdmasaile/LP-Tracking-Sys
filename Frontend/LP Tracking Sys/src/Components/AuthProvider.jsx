import { useState,createContext,useContext } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
   const [token, setToken] = useState();
   const [data, setData] = useState({});

   const handleLogin = ({token,data})=>{
      setToken(token);
      setData(data)
   }
   const handleLogout = ()=>{
      setToken(null);
      setData(null)

   }
   
   const value={
      token,
      data,
      Login:handleLogin,
      Logout:handleLogout,
   }
   return ( 
      <AuthContext.Provider value={value}>
         {children}
      </AuthContext.Provider>
   );
}
export const useAuth = ()=>{
   return useContext(AuthContext);
}
 
export default AuthProvider;
