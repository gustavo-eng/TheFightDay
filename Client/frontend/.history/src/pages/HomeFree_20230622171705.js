// aqui vai ser renderizado o que tem em Home, mas sem o botao de pagar
import React, { useEffect, useState } from "react";

import controllServiceCompetition from "../service/taskServiceCompetition";
import './homeFree.css';

const  Homefree = (props) => {
    const [nextPage, setNextPage] = useState(0)

    const [competition, setCompetition] = useState([])

    useEffect(() => {

    }, [nextPage])

    const handleNextPage = (e) => {
        e.preventDefault()
        setNextPage(nextPage + 1)
        controllServiceCompetition.paginateCompetition(nextPage).then(data => {
            setCompetition(data.docs)
            console.log(`next page == ${nextPage}`)
            console.log(data)
        }).catch(err => {
            console.log('Erro ao paginar competicao. Erro --> '+ err)
        })
    }

    const handleBeforePage = (e) => {
        e.preventDefault()
        if(nextPage > 0) {
            setNextPage(nextPage - 1)
        }else {
            setNextPage(0)
        }
        controllServiceCompetition.paginateCompetition(nextPage).then(data => {
            setCompetition(data.docs)
            console.log(`next page == ${nextPage}`)
            console.log(data)
            console.log('--------------- setCompetition ------------------')
            console.log(competition.docs)
            console.log('Competicao real!!!')
            console.log(competition)
        }).catch(err => {
            console.log('Erro ao paginar competicao. Erro --> '+ err)
        })
    }
    // const a = []
    // a.length
//
// {_id: '649483ad2e001807e6435a6a', nome: 'Camp4', DataPagamento: '02/03/2024', DataCompeticao: '02/05/2024', valor: 58, …}
    return (
        <div>
            <h1> Hello World ! </h1>
            {
                competition.length > 0 ?
                 competition.map((comp, index) => {
                        return (
                        <div className="container_comp">
                            <h3>{comp.nome}</h3>
                            <h3>Preço: {comp.valor}  reais </h3>
                            <h2> Data Pagamento {comp.DataPagamento}</h2>
                            <h2> Data Competição  {comp.DataCompeticao}</h2>

                        </div>

                        )
                })
                : <h2>Sem registros </h2>

            }
            <button onClick={(e)=> handleNextPage(e) }> Próximo</button>
            <button onClick={(e) => handleBeforePage(e)}> Voltar </button>
        </div>
    )

}

export default Homefree;


/*

paginateCompetition: async (pages) => {
        const data = {
            method: 'GET',
            headers: {'Content-type': 'application/json'},
        }
        const response = await fetch(`http://localhost:3333/competition/pagination/${pages}`, data)

        if(!response.ok) {

            throw new Error('Erro ao paginar as competições');

        } else {
            return response.json()
        }

    }
*/