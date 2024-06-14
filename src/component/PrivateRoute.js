import {Navigate, useLocation} from 'react-router-dom'
import {useAuth} from "../Context/AuthContext";


const PrivateRoute =  ({children}) =>{
    const auth = useAuth()
    const location = useLocation()
    if(auth.user === null) {
        <Navigate to={"/login"} state={{from: location.pathname}} replace/>
    }else if (auth.user !== null) {
        return (children)
    }
}

export default PrivateRoute