import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({}) => {
    let auth = localStorage.getItem('token')

    return (
        <Route {...rest}>
            {
                !auth ? <Redirect to="/home" />
            }

        </Route>
    )


}

export default PrivateRoute;