import { Navigate, Outlet } from 'react-router-dom';




const PrivateRoute = () => {
    let auth = localStorage.getItem('token')
    console.log('auth em PrivateRoute --> ')
    console.log(auth)
    return (

            !auth ? <Outlet/> : <Navigate to={"/"}/>

    )
}

export default PrivateRoute;