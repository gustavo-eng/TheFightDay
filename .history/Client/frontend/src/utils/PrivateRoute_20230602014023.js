import { Route } from 'react-router-dom';

import { redirect } from 'react-router-dom';



const PrivateRoute = ({children, ...rest}) => {
    let auth = localStorage.getItem('token')
    console.log('auth em PrivateRoute --> ')
    console.log(auth)
    return (
        <Route {...rest}>
            {!auth ? redirect("/home") : children  }
        </Route>
    )
}

export default PrivateRoute;