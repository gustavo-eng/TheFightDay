import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import FormCardCompetition from "../Components/CardCompetition";
import controllServiceCompetition from "../service/taskServiceCompetition";
import controllServicePayment from "../service/taskServicePayment";

import './home.css';

ReactModal.setAppElement('#root');

const Home = () => {
    // Modal
    const [modalIsOpen, setIsOpen] = useState(false);
    const [openModalId, setOpenModalId] = useState(null);
    // Estado dos cards e dados das competições
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [competitions, setCompetitions] = useState([]);
    const [cardsData, setCardsData] = useState([]);
    const [selectedCompetitionId, setSelectedCompetitionId] = useState('');

    const permission = localStorage.getItem('permission');
    const token = localStorage.getItem('token');
    const [cardPayment, setCardPayment] = useState(false);

    // Dados atualizados da competição
    const [newNome, setNewNome] = useState('');
    const [newDataPagemento, setNewDataPagemento] = useState('');
    const [newDataCompeticao, setNewDataCompeticao] = useState('');
    const [newPrice, setNewPrice] = useState('');

    useEffect(() => {
        fetch('http://localhost:3333/competition')
            .then(response => response.json())
            .then(data => {
                setCompetitions(data);
                // Inicializa o estado dos cards com o formulário oculto
                const initialCardsData = data.map(comp => ({
                    competition: comp,
                    showForm: false,
                    nameCompetition: '',
                    categoryWeight: '',
                    picture: ''
                }));
                setCardsData(initialCardsData);
            })
            .catch(error => console.error('Erro ao obter competições:', error));
    }, []);

    const modalPayment = (e, index) => {
        e.preventDefault();
        // Atualiza o estado do card específico para exibir o formulário
        setCardsData(prevState => {
            const updatedCardsData = [...prevState];
            updatedCardsData[index].showForm = true;
            return updatedCardsData;
        });
        setSelectedCompetitionId(competitions[index]._id); // Define o _id da competição selecionada
    };

    const handlePayment = async (e, index) => {
        e.preventDefault();
        const cardData = cardsData[index];
        const competition = cardData.competition;
        const { nameCompetition, categoryWeight, picture } = cardData;

        // Realiza o pagamento usando os dados do formulário
        const response = await controllServicePayment.savePayment(
            selectedCompetitionId, // Usa o _id da competição selecionada
            token,
            email,
            user,
            nameCompetition,
            categoryWeight,
            newDataCompeticao,
            picture
        );
        console.log(response);

        // Atualiza o estado do card específico para ocultar o formulário
        setCardsData(prevState => {
            const updatedCardsData = [...prevState];
            updatedCardsData[index].showForm = false;
            return updatedCardsData;
        });

        setSelectedCompetitionId(''); // Limpa o _id da competição selecionada
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleUserChange = (e) => {
        setUser(e.target.value);
    };

    const handleNameCompetitionChange = (e, index) => {
        const { value } = e.target;
        setCardsData(prevState => {
            const updatedCardsData = [...prevState];
            updatedCardsData[index].nameCompetition = value;
            return updatedCardsData;
        });
    };

    const handleCategoryWeightChange = (e, index) => {
        const { value } = e.target;
        setCardsData(prevState => {
            const updatedCardsData = [...prevState];
            updatedCardsData[index].categoryWeight = value;
            return updatedCardsData;
        });
    };

    const handlePictureChange = (e, index) => {
        const { value } = e.target;
        setCardsData(prevState => {
            const updatedCardsData = [...prevState];
            updatedCardsData[index].picture = value;
            return updatedCardsData;
        });
    };

    const cancelPayment = (index) => {
        setCardsData(prevState => {
            const updatedCardsData = [...prevState];
            updatedCardsData[index].showForm = false;
            return updatedCardsData;
        });
        setSelectedCompetitionId(''); // Limpa o _id da competição selecionada
    };

    // Funções para o modal
    const openModal = (comp) => {
        setOpenModalId(comp._id)
        setIsOpen(true);
    };

    const closeModal = () => {
        setOpenModalId(null)
        setIsOpen(false);
    };

    // Manipulação dos dados da competição para atualização
    const handleNewNomeChange = (e) => {
        setNewNome(e.target.value);
    };

    const handleDataPagementoChange = (e) => {
        setNewDataPagemento(e.target.value);
    };

    const handleDataCompeticaoChange = (e) => {
        setNewDataCompeticao(e.target.value);
    };

    const handleNewPriceChange = (e) => {
        setNewPrice(e.target.value);
    };

    // Função para atualizar a competição
    const updateCompetition = async (e, idCompetition) => {
        e.preventDefault();
        console.log('Id da competição a ser atualizada:', idCompetition);
        try {
            const response = await controllServiceCompetition.updateCompetition(
                idCompetition,
                token,
                newNome,
                newDataPagemento,
                newDataCompeticao,
                newPrice
                );
                console.log('COMPETIÇÃO ATUALIZADA COM SUCESSO --> ');
                console.log(await response.json());
            } catch (error) {
                console.log('Erro ao atualizar competição. Erro --> ');
                console.log(error);
            }
            window.location.reload()
    };
    //  deleteCompetition: async (idCompetition, token) => {
    const deleteCompetition = async (e, idCompetition) => {
        e.preventDefault();
        try {
            const response = await controllServiceCompetition.deleteCompetition(idCompetition, token)
            console.log('Competicao deletada com sucesso !!. Response --> ')
            console.log(response)
            window.location.reload()

        } catch (error) {
            console.log('Erro ao deletar competicao. Erro --> ')
            console.log(error)
        }
    }

        return (
            <div className="containerHome">
            <h1>Competições</h1>
            {permission === 'sensei' && (
                <div className="containerCompeticao">
                    <FormCardCompetition  name="Cadastrar Competição "/>

                </div>

            )}

            {competitions.map((comp, index) => (
                <div className="allCards">
                    <div key={comp._id} className="cardCompetition">
                        <div className="cardAtributes">
                            <h2>{comp.nome}</h2>
                            <h4>Data do pagamento: {comp.DataPagamento}</h4>
                            <h4>Data da Competição: {comp.DataCompeticao}</h4>
                            <h3>Valor: {comp.valor} R$</h3>
                            <h3>Comp id {comp._id}</h3>
                        </div>

                        <ReactModal
                            isOpen={openModalId === comp._id}
                            onRequestClose={closeModal}
                            contentLabel="Modal competition"
                            className="modal-competition"
                            >
                            <a href="#">
                                <img className="imgModal" src="https://static.wixstatic.com/media/5b4b97_a2e5c36cfd584f3aa512ad8b07f30727~mv2.png/v1/fill/w_111,h_121,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/NOVVA%20LOGO%20COM%20EFEITO%20SEM%20SOMBRA.png" alt="Logo" />
                            </a>
                            <input
                                type="text"
                                placeholder="Nome da competição"
                                name="newNome"
                                value={newNome}
                                onChange={handleNewNomeChange}
                                required
                                />
                            <input
                                type="text"
                                placeholder="Nova data para pagamento"
                                name="newDataPagemento"
                                value={newDataPagemento}
                                onChange={handleDataPagementoChange}
                                required
                                />
                            <input
                                type="text"
                                placeholder="Nova data competição"
                                name="newDataCompeticao"
                                value={newDataCompeticao}
                                onChange={handleDataCompeticaoChange}
                                required
                                />
                            <input
                                type="number"
                                placeholder="Preço atualizado"
                                name="newPrice"
                                value={newPrice}
                                onChange={handleNewPriceChange}
                                required
                                />
                            <button onClick={(e) => updateCompetition(e, comp._id)}>Atualizar competição</button>
                            <button className="btn-Close-modal" onClick={closeModal}>Fechar modal</button>
                            {permission === 'sensei' && (
                                <>
                                <button className="btn-del-comp"onClick={(e) => deleteCompetition(e, comp._id )} > Deletar </button>
                                </>

                            )}
                        </ReactModal>

                        <button className="btn-OpenModal" onClick={() => openModal(comp)}>Atualizar </button>
                        {!cardsData[index].showForm && (
                            <button className="btn-payBefore" onClick={(e) => modalPayment(e, index)}>Pagar</button>
                        )}

                        {cardsData[index].showForm && (
                            <div className="formPayment">
                                <h3>Formulário de Pagamento</h3>

                                <form>
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        name="email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Usuário"
                                        name="user"
                                        value={user}
                                        onChange={handleUserChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Nome da competição"
                                        name="nameCompetition"
                                        value={cardsData[index].nameCompetition}
                                        onChange={(e) => handleNameCompetitionChange(e, index)}
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Categoria de peso"
                                        name="categoryWeight"
                                        value={cardsData[index].categoryWeight}
                                        onChange={(e) => handleCategoryWeightChange(e, index)}
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="URL da imagem"
                                        name="picture"
                                        value={cardsData[index].picture}
                                        onChange={(e) => handlePictureChange(e, index)}
                                        required
                                    />
                                </form>
                                <button className="btn-form-payment" onClick={(e) => handlePayment(e, index)}>Pagar!</button>
                                <button className="btn-cancel-form-payment" onClick={() => cancelPayment(index)}>Cancelar </button>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;

