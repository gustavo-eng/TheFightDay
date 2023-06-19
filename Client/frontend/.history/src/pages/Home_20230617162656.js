import React, { useState } from "react";

import { useEffect } from "react";

import './home.css';

const Home = () => {

    const [competition, setCompetition] = useState([]);
    const [cardPayment, setCardPayment] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3333/competition')
            .then(response => response.json())
            .then(data => setCompetition(data))
            .catch(error => console.error('Erro ao obter competições:', error));
            console.warn('req.id do usuario atual --> ')
    }, []);


    const handlePayment = async (e) => {
        e.preventDefault()
        setCardPayment(!cardPayment)
        if(cardPayment) {

        }
    }



    return (
        <div className="containerHome">
            <h1>Competições</h1>
            <div className="containerCompeticao">
                <button className="btn-addComp">Adicionar competição</button>
            </div>

        {  competition.map(comp => (
                <div key={comp._id} className="cardCompetition">
                    <h2 >{comp.nome}</h2>
                    <h4> Data do pagamento : {comp.DataPagamento} </h4>
                    <h4> Data da Competição : {comp.DataCompeticao} </h4>
                    <h3>Valor : {comp.valor} R$</h3>
                    {/* Adicionar em taskService servico para  efetuar pagamento */}
                    <button onClick={handlePayment}> Pagar </button>
                    {cardPayment ? <h1>card</h1>  : null}
                </div>
           ))
        }

        </div>
    )
}





export default Home;