import React from "react";

import { useEffect } from "react";

import './home.css';

const Home = () => {
    //localStorage.removeItem('token') // retirar
    useEffect(() => {
        const clearToken = () => {
          localStorage.removeItem('token'); // Remover o token após 4 segundos
        };
        const timeoutId = setTimeout(clearToken, 6000);
        // Limpar o timeout quando o componente for desmontado
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            <h1> User logged! Succes.   </h1>
        </>
    )
}


export default Home;