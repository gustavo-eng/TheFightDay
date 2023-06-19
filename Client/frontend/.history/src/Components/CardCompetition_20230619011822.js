import React from 'react';

const FormCardCompetition = (props) => {

    const [newNome, setNewNome] = useState('');
    const [newDataPagemento, setNewDataPagemento] = useState('');
    const [newDataCompeticao, setNewDataCompeticao] = useState('');
    const [newPrice, setNewPrice] = useState('');

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
        </>
    )
}

export default FormCardCompetition;