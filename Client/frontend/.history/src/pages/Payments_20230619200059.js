import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import controllServicePayment from "../service/taskServicePayment";

import './payment.css';

ReactModal.setAppElement('#root');

const Payments = () => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const userPermission = localStorage.getItem('permission');

    const [paymentsUser, setPaymentsUser] = useState([]);
    const [openModalId, setOpenModalId] = useState(null);
    const [formData, setFormData] = useState({
        user: '',
        email: '',
        nameCompetition: '',
        categoryWeight: '',
        categoryYear: ''
    });

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

    function openModal(pays) {
        setOpenModalId(pays._id);
        setFormData({
            user: pays.nome,
            email: pays.email,
            nameCompetition: pays.nomeCompeticao,
            categoryWeight: pays.categoriaPeso,
            categoryYear: pays.categoriaIdade
        });
    }

    function closeModal() {
        setOpenModalId(null);
        setFormData({
            user: '',
            email: '',
            nameCompetition: '',
            categoryWeight: '',
            categoryYear: ''
        });
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleUpdatePayment = async (e, idPayment) => {
        e.preventDefault();
        const { user, email, nameCompetition, categoryWeight, categoryYear } = formData;
        const response = await controllServicePayment.updatePayment(token, userId, idPayment, email, user, nameCompetition, categoryWeight, categoryYear, "");
        window.location.reload();
        console.log('Pagamento atualizado --> ');
        console.log(response);
    };

    const handleDeletePayment = async (e, paymentId) => {
        e.preventDefault()
        const response = await controllServicePayment.deletePaymentByUser(token, paymentId)
        window.location.reload();
        console.log('Usuario deletada --> ')
        console.log(response)
    };

    return (
        <div className="boxPayment">
            {paymentsUser ?
                paymentsUser.map(pays => (
                    <div className="mainPayment" key={pays._id}>
                        <div className="containerPayment">
                            <p> ID pagamento = {pays._id}</p>
                            <h2>Nome do Atleta: {pays.nome}</h2>
                            <h2> Competição: {pays.nomeCompeticao}</h2>
                            <h3> Categoria Idade: {pays.categoriaIdade} </h3>
                            <h3> Categoria Peso: {pays.categoriaPeso} </h3>
                            <h4>Email : {pays.email} </h4>
                            {openModalId === pays._id && (
                                <ReactModal
                                    isOpen={true}
                                    onRequestClose={closeModal}
                                    className="modal-content"
                                    contentLabel="Example Modal"
                                >
                                    <a href="#">
                                        <img className="imgModal" src="https://static.wixstatic.com/media/5b4b97_a2e5c36cfd584f3aa512ad8b07f30727~mv2.png/v1/fill/w_111,h_121,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/NOVVA%20LOGO%20COM%20EFEITO%20SEM%20SOMBRA.png" alt="Logo" />
                                    </a>
                                    <h2> Venta atual Competicao: {pays.nomeCompeticao} </h2>
                                    <h3>Id da modal {pays._id}</h3>
                                    <input
                                        type="text"
                                        placeholder="Nome do atleta"
                                        name="user"
                                        value={formData.user}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Email do atleta"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Nome da competição"
                                        name="nameCompetition"
                                        value={formData.nameCompetition}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Categoria de peso do atleta"
                                        name="categoryWeight"
                                        value={formData.categoryWeight}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Categoria de Idade do atleta"
                                        name="categoryYear"
                                        value={formData.categoryYear}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <hr />
                                    <button onClick={closeModal}> Close </button>
                                    <button onClick={(e) => handleUpdatePayment(e, pays._id)}> Atualizar </button>
                                    { userPermission == 'sensei' ?
                                        <button onClick={(e) => handleDeletePayment(e, pays._id)}>  Deletar  </button>
                                        :null
                                    }
                                </ReactModal>
                            )}

                            <button onClick={() => openModal(pays)}> Editar </button>
                        </div>
                    </div>
                ))
                : <>SERAA</>
            }
        </div>
    );
};

export default Payments;
