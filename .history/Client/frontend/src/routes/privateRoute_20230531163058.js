import React from "react";

import isAuthenticated from "../auth";

import { Navigate } from "react-router-dom";


const privateRoute = ({ children }) => {
    if (isAuthenticated()) {
        return children;
    } else {
        return <Navigate to="/login" />;
    }
}