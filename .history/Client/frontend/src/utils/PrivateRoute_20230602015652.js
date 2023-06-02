import { Navigate } from 'react-router-dom';

/* Outlet ?? */


const PrivateRoute = () => {
    let auth = localStorage.getItem('token')
    // let auth = false
    console.log('auth em PrivateRoute --> ')
    console.log(auth)
    return (
            (auth != 'undefined' && auth != false && auth != null) ? <Navigate to={"/"}/>  : <Navigate to={"/"}/>
    )
}

export default PrivateRoute;