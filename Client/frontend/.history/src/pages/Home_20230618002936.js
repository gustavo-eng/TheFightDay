import React, { useEffect, useState } from "react";
import controllServicePayment from "../service/taskServicePayment";

import './home.css';

const Home = () => {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [competitions, setCompetitions] = useState([]);
    const [cardsData, setCardsData] = useState([]);
    const [selectedCompetitionId, setSelectedCompetitionId] = useState('');

    const permission = localStorage.getItem('permission')
    const token = localStorage.getItem('token')
    const [cardPayment, setCardPayment] = useState(false);

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
                    categoryYear: '',
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
        const { nameCompetition, categoryWeight, categoryYear, picture } = cardData;

        // Realiza o pagamento usando os dados do formulário
        const response = await controllServicePayment.savePayment(
            selectedCompetitionId, // Usa o _id da competição selecionada
            token,
            email,
            user,
            nameCompetition,
            categoryWeight,
            categoryYear,
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

    const cancelPayment = (index) => {
        setCardsData(prevState => {
            const updatedCardsData = [...prevState];
            updatedCardsData[index].showForm = false;
            return updatedCardsData;
        });
        setSelectedCompetitionId(''); // Limpa o _id da competição selecionada

    };

    return (
        <div className="containerHome">
            <h1>Competições</h1>
            {permission === 'sensei' && (
                <div className="containerCompeticao">
                    <button className="btn-addComp">Adicionar competição</button>
                </div>
            )}

            {competitions.map((comp, index) => (
                <div key={comp._id} className="cardCompetition">
                    <h2>{comp.nome}</h2>
                    <h4>Data do pagamento: {comp.DataPagamento}</h4>
                    <h4>Data da Competição: {comp.DataCompeticao}</h4>
                    <h3>Valor: {comp.valor} R$</h3>
                    <h3>Comp id {comp._id}</h3>

                    {!cardsData[index].showForm && (
                        <button onClick={(e) => modalPayment(e, index)}>Pagar</button>
                    )}

                    {cardsData[index].showForm && (
                        <>
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

                            </form>
                            <button onClick={(e) => handlePayment(e, index)}>Pagar2!</button>
                            <button onClick={() => cancelPayment(index)}>Cancelar Pagamento</button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Home;
