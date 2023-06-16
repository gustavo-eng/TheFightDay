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
        <h1>Competições</h1>
        {  competition.map(comp => (
                <div key={comp._id} className="cardCompetition">
                    <h2 >{comp.nome}</h2>
                    <h4> Data do pagamento : {comp.DataPagamento} </h4>
                    <h4> Data da Competição : {comp.DataCompeticao} </h4>
                    <h3>Valor : {comp.valor} R$</h3>
                </div>
           ))
        }
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