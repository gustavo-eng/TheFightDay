import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import controllServicePayment from "../service/taskServicePayment";

import './payment.css';

ReactModal.setAppElement('#root');

const Payments = () => {
    const token = localStorage.getItem('token');
    const [paymentsUser, setPaymentsUser] = useState([]);
    const [openModalId, setOpenModalId] = useState(null);

    useEffect(() => {
        controllServicePayment.listPayment(token)
            .then(response => response.json())
            .then(data => {
                console.log('data ====> ');
                console.log(data.payments);
                setPaymentsUser(data.payments);
            })
            .catch(error => console.log(error));
    }, []);

    const handleEditPayment = (e, index) => {
        e.preventDefault();
    };

    function openModal(pays) {
        setOpenModalId(pays._id);
    }

    function closeModal() {
        setOpenModalId(null);
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

                            {openModalId === pays._id && (
                                <ReactModal
                                    isOpen={true}
                                    onRequestClose={closeModal}
                                    className="modal-content"
                                    contentLabel="Example Modal"
                                >
                                    <h2> Venta atual Competicao: {pays.nomeCompeticao} </h2>
                                    <p>Id da modal {pays._id}</p>
                                    <hr />
                                    <button onClick={closeModal}> Close </button>
                                </ReactModal>
                            )}

                            <button onClick={() => openModal(pays)}> Edit </button>
                        </div>
                    </div>
                ))
                : <>SERAA</>
            }
        </div>
    );
};

export default Payments;
