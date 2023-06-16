import React, { useState } from "react";

import { useEffect } from "react";

import './home.css';

const Home = () => {

    const [competition, setCompetition] = useState([])
    const [comp, setComp] = useState([])
    const test = () => {
        fetch('http://localhost:3333/competition').then(el => el.json()).then(e => setComp(...e))
    }
    //NAO PRECISA DE TOKEN
    // const token = localStorage.getItem('token')
    // const getCompetition = () => {
    //     setCompetition(taskService.listCompetition(token))
    //     // taskService.listCompetition(token)
    // }

    //localStorage.removeItem('token') // retirar
    useEffect(() => {
        getCompetition()
        //console.log('Competition em Home --- > ')
        //console.log(competition)
        test()
        console.log('Olha o comp ')
        fetch('http://localhost:3333/competition').then(el => el.json()).then(e => setComp(...e))
        console.log(comp)
        //test()
        //console.log('Cagadaa')
        //console.log('Depois do fetch --> ')
    }, []);

    return (
        <>
          {/* {
            competition ? competition.map((comp) => {
                <h2>{comp.nome}</h2>
            }
               ): null
          } */}



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