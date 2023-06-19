import React, { useState } from 'react';
import controllServiceCompetition from '../service/taskServiceCompetition';

import './cardCompetition.css';

/*
 const response = await controllServiceCompetition.updateCompetition(
                idCompetition,
                token,
                newNome,
                newDataPagemento,
                newDataCompeticao,
                newPrice
            );

*/
const FormCardCompetition = (props) => {

    const token = localStorage.getItem('token')

    const [newNome, setNewNome] = useState('');
    const [newDataPagemento, setNewDataPagemento] = useState('');
    const [newDataCompeticao, setNewDataCompeticao] = useState('');
    const [newPrice, setNewPrice] = useState('');

    // ====================================
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

    // ====================================
        //saveCompetition: async (token, name, dataPayment, dataCompetition, price) => {
    const saveCompetition =  async (e) => {
        e.preventDefault()
        try {
            const response = await controllServiceCompetition.saveCompetition(token,newNome, newDataPagemento, newDataCompeticao, newPrice)
            console.log('Nova competicao salva --> ')
            console.log(response)
        } catch (error) {
            console.log('Ocorreu um erro ao salvar nova competicao. Erro --> ')
            console.log(error)
        }
        window.location.reload()

    }

    return (
        <>
            <h1>{props.name}</h1>
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
            <button className="btn-addComp" onClick={(e) => saveCompetition(e)}>Adicionar competição</button>
        </>
    )
}

export default FormCardCompetition;