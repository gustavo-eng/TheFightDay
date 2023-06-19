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

    const convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
        const reader = new FileReader;
        reader.onerror = reject;
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.readAsDataURL(blob);
    });

    const codificacaoBase64 = async (base64) => {
        const base64Data = base64
        const base64Response = await fetch(`data:image/jpeg;base64,${base64Data}`);
        const blob = await base64Response.blob();
        const base64String =  convertBlobToBase64(blob);
        console.log('Olha a base64String')
        base64String.then(el => {
            console.log(el)
        })

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
                            <img src="data:image/jpeg;base64,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" alt="NAO DEU"></img>
                            <p>Base64 image = {pays.comprovante}</p>
                            <button onClick={() => console.log(pays._id)}> Edit </button>
                            <button onClick={() => codificacaoBase64(pays.comprovante)}> Base64 </button>
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

