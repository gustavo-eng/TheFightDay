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
                            <img src="data:image/jpeg;base64,aHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUm1PRUE0dkNVTXR6SEZoclR0UVpOTWJHOG5FWXp5NGgtc3BPU2xJZjhKdUEmcw==" alt="NAO DEU"/>

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

