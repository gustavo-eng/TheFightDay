import React from "react";

import { useEffect } from "react";

import './home.css';

const Home = () => {
    //localStorage.removeItem('token') // retirar
    useEffect(() => {
        const clearToken = () => {
          localStorage.removeItem('token'); // Remover o token após 4 segundos
        };
        const timeoutId = setTimeout(clearToken, 15000);
        // Limpar o timeout quando o componente for desmontado
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            <h1>Competições</h1>
            <h1> User logged! Succes.   </h1>
            <h1> User logged! Succes.   </h1>
            <h1> User logged! Succes.   </h1>
            <h1> User logged! Succes.   </h1>
            <h1> User logged! Succes.   </h1>
            <h1> User logged! Succes.   </h1>
            <h1> User logged! Succes.   </h1>
            <h1> User logged! Succes.   </h1>
            <h1> User logged! Succes.   </h1>
            <h1> User logged! Succes.   </h1>
            <h1> User logged! Succes.   </h1>
            <h1> User logged! Succes.   </h1>
        </>
    )
}


export default Home;