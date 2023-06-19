import React, { useEffect, useState } from "react";
import controllServicePayment from "../service/taskServicePayment";

import './payment.css';

const Payments = () => {
    const token = localStorage.getItem('token');
    const [paymentsUser, setPaymentsUser] = useState([]);

    useEffect(() => {
        controllServicePayment.listPayment(token)
            .then(response => response.json())
            .then(data => {
                console.log('data ====> ')
                console.log(data.payments)
                setPaymentsUser(data.payments)
            })
            .catch(error => console.log(error))
    }, []);

    const handleEditPayment = (e, index) => {
        e.preventDefault();
    };

    const decodeBase64Image = (base64String) => {
        const decodedImage = atob(base64String);
        const uint8Array = new Uint8Array(decodedImage.length);
        for (let i = 0; i < decodedImage.length; i++) {
            uint8Array[i] = decodedImage.charCodeAt(i);
        }
        const blob = new Blob([uint8Array], { type: "application/octet-stream" });
        const imageUrl = URL.createObjectURL(blob);
        return imageUrl;
    };

    const getImageType = (base64String) => {
        const type = base64String.toString().split(';')[0].split('/')[1];
        return type;
    };

    const getHttpsImageUrl = (base64String) => {
        const imageUrl = decodeBase64Image(base64String);
        const httpsImageUrl = imageUrl.replace(/^http:/, 'https:');
        return httpsImageUrl;
    };

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
                            {pays.comprovante && (
                                <img
                                    src={'blob:https://web.whatsapp.com/50810834-3d4c-4069-9868-404034f93608'}
                                    alt="Comprovante"
                                    type={getImageType(pays.comprovante)}
                                />
                            )}
                            <p>Base64 image = {pays.comprovante}</p>
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

