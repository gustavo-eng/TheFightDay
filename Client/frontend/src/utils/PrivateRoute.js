import { Navigate, Outlet } from 'react-router-dom';

/* Outlet ?? */


const PrivateRoute = () => {
    let auth = localStorage.getItem('token')
    return (
            (auth != 'undefined' && auth != false && auth != null) ? <Outlet/> : <Navigate to={"/"}/>
    )
}

export default PrivateRoute;