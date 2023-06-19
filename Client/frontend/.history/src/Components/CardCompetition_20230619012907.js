import React, { useState } from 'react';



const FormCardCompetition = (props) => {

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
            <button className="btn-addComp">Adicionar competição</button>
        </>
    )
}

export default FormCardCompetition;