import React, { useState } from "react";
import taskService from "../service/taskService";

import { useEffect } from "react";

import './home.css';

const Home = () => {

    const [competition, setCompetition] = useState([])

    const token = localStorage.getItem('token')
    const getCompetition = () => {
        setCompetition(taskService.listCompetition(token))
        // taskService.listCompetition(token)
    }

    //localStorage.removeItem('token') // retirar
    useEffect(() => {
        getCompetition()
    }, []);

    return (
        <>
          {
            competition ? competition.map((comp) => {
                <h2>{comp.nome}</h2>
            }
               ): null
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