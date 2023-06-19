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
        <>
            {paymentsUser ?
                paymentsUser.map(pays => (
                    <h3> {pays.nomeCompeticao}</h3>
                ))
            : <>SERAA</>

            }
        </>
    )
}

export default Payments;

