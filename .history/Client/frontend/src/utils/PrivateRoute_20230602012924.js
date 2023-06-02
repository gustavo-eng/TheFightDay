import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
    let auth = localStorage.getItem('token')

    return (
        <Route {...rest}>
            {!auth ? <Redirect to="/home" /> : children  }
        </Route>
    )
}

export default PrivateRoute;