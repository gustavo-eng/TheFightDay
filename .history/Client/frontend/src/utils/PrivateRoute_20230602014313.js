import { Navigate, Outlet, Route } from 'react-router-dom';




const PrivateRoute = ({children, ...rest}) => {
    let auth = localStorage.getItem('token')
    console.log('auth em PrivateRoute --> ')
    console.log(auth)
    return (
        <Route {...rest}>
            {!auth ? <Outlet/> : <Navigate to={"/"}/>  }
        </Route>
    )
}

export default PrivateRoute;