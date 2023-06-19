import React, { useEffect, useState } from "react";
import controllServicePayment from "../service/taskServicePayment";

import ReactModal from "react-modal";

import './payment.css';

ReactModal.setAppElement('#root')

const Payments = () => {
    const token = localStorage.getItem('token')
    const [paymentsUser, setPaymentsUser] = useState([])
    const [openModel, setOpenModal] = useState(false)

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

    function openModal() {
        setOpenModal(true)
    }

    function closeModal() {
        setOpenModal(false)
    }

    function handleModal() {
        setOpenModal(!openModel)
    }
    return (
        <div>
            {paymentsUser ?
                paymentsUser.map(pays => (
                    <div className="mainPayment">
                        <div key={pays._id} className="containerPayment">
                            <p> ID pagamento = {pays._id}</p>
                            <h2>Nome do Atleta: {pays.nome}</h2>
                            <h2> Competição: {pays.nomeCompeticao}</h2>
                            <p> Categoria Idade: {pays.categoriaIdade} </p>
                            <p> Categoria Peso: {pays.categoriaPeso} </p>

                            <ReactModal
                                isOpen={openModel}
                                // onAfterOpen={afterOpenModal}
                                onRequestClose={closeModal}
                                // style={customStyles}
                                contentLabel="Example Modal"
                                className="modal-content"
                            >
                                <h2> Venta atual  Competicao : {pays.nome} </h2>
                                <hr />

                                <button onClick={closeModal}> Close </button>
                            </ReactModal>

                            <button onClick={openModal}> Edit </button>

                        </div>
                    </div>
                ))
            : <>SERAA</>

            }
        </div>
    )
}

export default Payments;


