import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const PrivateRouter = ({children}) => {
    const location=useLocation()
   
    const {user,loading}=useContext(AuthContext)
   if(loading){
    return <p className="text-3xl text-center mt-12">Loading.........</p>
   }
    if(user){
        return children
    }
    return <Navigate to='/login' state={location.pathname} ></Navigate>
};

export default PrivateRouter;