import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import controllServicePayment from "../service/taskServicePayment";

import './payment.css';

ReactModal.setAppElement('#root');

const Payments = () => {
    const token = localStorage.getItem('token');
    const [paymentsUser, setPaymentsUser] = useState([]);
    const [openModalId, setOpenModalId] = useState(null);
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')

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

    // Inputs ==================================================
    const handleUserChange = (e) => {
        setUser(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    // Inputs ==================================================

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
                            <p>Email : {pays.email} </p>
                            {openModalId === pays._id && (
                                <ReactModal
                                    isOpen={true}
                                    onRequestClose={closeModal}
                                    className="modal-content"
                                    // overlayClassName="overlay-modal"
                                    contentLabel="Example Modal"
                                >
                                     <a href="#">
                                        <img  className="imgModal" src="https://static.wixstatic.com/media/5b4b97_a2e5c36cfd584f3aa512ad8b07f30727~mv2.png/v1/fill/w_111,h_121,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/NOVVA%20LOGO%20COM%20EFEITO%20SEM%20SOMBRA.png" alt="Logo"/>
                                     </a>
                                    <h2> Venta atual Competicao: {pays.nomeCompeticao} </h2>
                                    <p>Id da modal {pays._id}</p>
                                    <input
                                        type="text"
                                        placeholder="Nome do atleta"
                                        name="user"
                                        value={user}
                                        onChange={handleUserChange}
                                        required
                                    />
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
