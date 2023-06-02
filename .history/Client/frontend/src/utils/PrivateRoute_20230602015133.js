import { Navigate } from 'react-router-dom';

/* Outlet ?? */


const PrivateRoute = () => {
    let auth = localStorage.getItem('token')
    console.log('auth em PrivateRoute --> ')
    console.log(auth)
    return (
            !auth ? <Navigate to={"/home"} /> : <Navigate to={"/"}/>
    )
}

export default PrivateRoute;