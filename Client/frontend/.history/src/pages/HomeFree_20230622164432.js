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
        controllServiceCompetition.paginateCompetition(2).then(data => {
            setCompetition(data)
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
        controllServiceCompetition.paginateCompetition(2).then(data => {
            setCompetition(data)
            console.log(`next page == ${nextPage}`)
            console.log(data)
        }).catch(err => {
            console.log('Erro ao paginar competicao. Erro --> '+ err)
        })
    }



    return (
        <>
            <h1> Hello World ! </h1>
            {/* {competition && (
                competition.map((item, index)=>(
                    <div key={index}>
                        <p>{ item }</p>
                    </div>
                ))
            )} */}
            <button onClick={(e)=> handleNextPage(e) }>Próximo</button>
            <button>Voltar </button>
        </>
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