import React, { useState } from 'react';
import controllServiceCompetition from '../service/taskServiceCompetition';

import validateFields from '../utils/validateFields';

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
    const [validateComp, setValidateComp ] = useState(false)

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
            //const validatorNewCompetition = (nameCompetition,newDatePayment ,newDateCompetition,newPrice) => {
    const saveCompetition =  async (e) => {
        e.preventDefault()
        try {

            if(validateFields.validatorNewCompetition(newNome, newDataPagemento, newDataCompeticao, newPrice)) {
                const response = await controllServiceCompetition.saveCompetition(token,newNome, newDataPagemento, newDataCompeticao, newPrice)
                console.log('Nova competicao salva --> ')
                console.log(response)
                window.location.reload()

            } else {
                setValidateComp(true)
                setTimeout(() => {
                    setValidateComp(false)
                }, 20300)
            }

        } catch (error) {
            console.log('Ocorreu um erro ao salvar nova competicao. Erro --> ')
            console.log(error)
        }

    }

    return (
        <>
            <h1 className='titleRegisterComp'>{props.name}</h1>
            <div className='divInputCardComp'>
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
            </div>
            <button className="btn-addComp" onClick={(e) => saveCompetition(e)}>Adicionar competição</button>
            {validateComp && (
                <h4> Campos inválidos. No mínimo 3 caracteres.   </h4>
            )}
        </>
    )
}

export default FormCardCompetition;