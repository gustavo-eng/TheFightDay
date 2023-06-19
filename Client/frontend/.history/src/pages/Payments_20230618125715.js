import React, { useEffect, useState } from "react";
import controllServicePayment from "../service/taskServicePayment";

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

    return (
        <div>
            {paymentsUser ?
                paymentsUser.map(pays => (
                    <div>
                        <h2> {pays.nomeCompeticao}</h2>
                        <p> Categoria Idade {pays.categoriaIdade} </p>
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

