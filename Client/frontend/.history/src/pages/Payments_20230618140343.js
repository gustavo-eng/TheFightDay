import React, { useEffect, useState } from "react";
import controllServicePayment from "../service/taskServicePayment";

import './payment.css';

const Payments = () => {
    const token = localStorage.getItem('token')
    const [paymentsUser, setPaymentsUser] = useState([])
    useEffect(() => {
        controllServicePayment.listPayment(token).then(response => response.json())
        .then(data => {
            console.log('data ====> ')
            console.log(data.payments)
            setPaymentsUser(data.payments)
        })
        .catch(error => console.log(error))
    }, [])

    const handleEditPayment = (e, index) => {
        e.preventDefault()

    }

    const decodeBase64Image = (base64String) => {
        const base64Image = base64String.split(",")[1] // Remove a parte "data:image/png;base64," do valor
        const decodedImage = atob()
    }

    return (
        <div>
            {paymentsUser ?
                paymentsUser.map(pays => (
                    <div className="mainPayment">
                        <div key={pays._id} className="containerPayment">
                            <p> ID = {pays._id}</p>
                            <h2>Nome do Atleta: {pays.nome}</h2>
                            <h2> Competição: {pays.nomeCompeticao}</h2>
                            <p> Categoria Idade: {pays.categoriaIdade} </p>
                            <p> Categoria Peso: {pays.categoriaPeso} </p>
                            {/* <p>Base64 image = {pays.comprovante}</p> */}
                            <button onClick={() => console.log(pays._id)}> Edit </button>
                        </div>
                    </div>
                ))
            : <>SERAA</>

            }
        </div>
    )
}

export default Payments;

/*
categoriaIdade
:
""
categoriaPeso
:
"-60kg"
competicao
:
"648b62aeaf050a3c9b0c413b"
comprovante
:
""
email
:
"gustavodias.2000@alunos.utfpr.edu.br"
nome
:
"SA"
nomeCompeticao
:
"Seletiva"
usuario
:
"648e030412f077d6af219021"
__v
:
0
_id
:
"648e7a757bf6347b411251c9"
*/

