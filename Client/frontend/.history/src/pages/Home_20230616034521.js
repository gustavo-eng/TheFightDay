import React, { useState } from "react";

import { useEffect } from "react";

import './home.css';

const Home = () => {

    const [competition, setCompetition] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3333/competition')
            .then(response => response.json())
            .then(data => setCompetition(data))
            .catch(error => console.error('Erro ao obter competições:', error));
    }, []);

    return (
        <>
        {  competition.map(comp => (
                <div key={comp._id}>
                    <h2 >{comp.nome}</h2>

                </div>

           ))
        }



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

    // const clearToken = () => {
        //   localStorage.removeItem('token'); // Remover o token após 4 segundos
        // };
        // const timeoutId = setTimeout(clearToken, 15000);
        // // Limpar o timeout quando o componente for desmontado
        // return () => clearTimeout(timeoutId);


export default Home;