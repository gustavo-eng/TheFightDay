import React, { useEffect, useState } from "react";
import controllServicePayment from "../service/taskServicePayment";

const Payments = () => {
    const token = localStorage.getItem('token')
    const [paymentsUser, setPaymentsUser] = useState([])
    useEffect(() => {
        controllServicePayment.listPayment(token).then(response => response.json())
        .then(data => {
            console.log('data ====> ')
            console.log("data", data)
        })
    })

    return (
        <>

        </>
    )
}

export default Payments;

