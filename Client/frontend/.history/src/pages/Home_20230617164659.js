import React, { useState } from "react";

import { useEffect } from "react";

import './home.css';

const Home = () => {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');

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


    // const { email, name, nameCompetition, categoryWeight, categoryYear, picture } = req.body
    // const idCompetition = req.query.competition

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
                    <h3>Comp id {comp._id}</h3>
                    {cardPayment ? null : <button onClick={modalPayment}> Pagar </button>}

                    {cardPayment ?
                        <>
                            <h2>Pagamento</h2>
                            <form >

                                <input
                                    type="text"
                                    placeholder="Usuário"
                                    name="user"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                                <input
                                    type="password"
                                    placeholder="Senha"
                                    name="password"
                                    value={user}
                                    onChange={handleUserChange}
                                    required
                                />
                            </form>
                            <button onClick={handlePayment}>Pagar</button>
                        </>
                    : null}
                </div>
           ))
        }

        </div>
    )
}





export default Home;


/*
router.post('/', controllAcces.accessControl, async (req, res) => {
    const { email, name, nameCompetition, categoryWeight, categoryYear, picture } = req.body
    const idCompetition = req.query.competition
    competitionDAO.getById(idCompetition).then(() => {
         paymentDAO.save(email, name, nameCompetition, categoryWeight, categoryYear, picture, idCompetition, req.id)
            .then(payment => {
                UserDAO.addPaymentToUser(req.id, payment._id)
                competitionDAO.addPaymentToCompetition(idCompetition ,payment._id)
                res.status(200).json(payment)
            }).catch(err => {
                res.status(500).json({msg: `Erro ao salvar pagamento. Error -> ${err}`, email: email})
            })
    }).catch(err => {
        res.status(404).json({msg: "Competition not found"})
    })
})

*/