import React from "react";

import isAuthenticated from "../auth";

import { Navigate } from "react-router-dom";


const privateRoute = ({ children }) => {
    if (isAuthenticated() != null) {
        return children;
    } else {

        // caso o user nao estiver autenticado, ou seja, caso o token nao estiver setado no localStorage
        // renderiza novamente para a tela de login
        return <Navigate to="/" />;
    }
}


export default privateRoute;