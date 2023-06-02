import { Route } from 'react-router-dom';

import { redirect } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
    let auth = localStorage.getItem('token')

    return (
        <Route {...rest}>
            {!auth ? redirect("/home") : children  }
        </Route>
    )
}

export default PrivateRoute;