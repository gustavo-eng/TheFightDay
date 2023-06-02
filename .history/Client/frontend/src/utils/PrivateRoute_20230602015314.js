import { Navigate, Outlet } from 'react-router-dom';

/* Outlet ?? */


const PrivateRoute = () => {
    // let auth = localStorage.getItem('token')
    let auth = false
    console.log('auth em PrivateRoute --> ')
    console.log(auth)
    return (
            auth ? <Outlet/> : <Navigate to={"/"}/>
    )
}

export default PrivateRoute;