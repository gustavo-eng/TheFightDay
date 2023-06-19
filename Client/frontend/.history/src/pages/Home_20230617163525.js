import React, { useState } from "react";

import { useEffect } from "react";

import './home.css';

const Home = () => {

    const [competition, setCompetition] = useState([]);
    const [cardPayment, setCardPayment] = useState(false);

    const permission = localStorage.getItem('permission')

    useEffect(() => {
        fetch('http://localhost:3333/competition')
            .then(response => response.json())
            .then(data => setCompetition(data))
            .catch(error => console.error('Erro ao obter competições:', error));
            console.warn('req.id do usuario atual --> ')
    }, []);


    const modalPayment = async (e) => {
        e.preventDefault()
        setCardPayment(!cardPayment)
        if(cardPayment) {

        }
    }

    const handlePayment = async (evt) => {
        evt.preventDefault()
        setCardPayment(false)

    }



    return (
        <div className="containerHome">
            <h1>Competições</h1>
        { permission == 'sensei' ?
             <>
                <div className="containerCompeticao">
                    <button className="btn-addComp">Adicionar competição</button>
                </div>
             </>
            : null
        }

        {  competition.map(comp => (
                <div key={comp._id} className="cardCompetition">
                    <h2 >{comp.nome}</h2>
                    <h4> Data do pagamento : {comp.DataPagamento} </h4>
                    <h4> Data da Competição : {comp.DataCompeticao} </h4>
                    <h3>Valor : {comp.valor} R$</h3>
                    {cardPayment ? null : <button onClick={modalPayment}> Pagar </button>}

                    {cardPayment ?
                        <>
                            <h2>Pagamento</h2>
                            <button onClick={handlePayment}></button>
                        </>
                    : null}
                </div>
           ))
        }

        </div>
    )
}





export default Home;