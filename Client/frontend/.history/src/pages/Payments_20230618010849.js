import React, { useEffect } from "react";
import controllServicePayment from "../service/taskServicePayment";

const Payments = () => {
    const token = localStorage.getItem('token')
    useEffect(() => {
        controllServicePayment.listPayment()
    })

    return (
        <>

        </>
    )
}

export default Payments;

