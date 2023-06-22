import React, { useEffect, useState } from "react";
import controllServiceCompetition from "../service/taskServiceCompetition";
import './homeFree.css';

const Homefree = (props) => {
    const [nextPage, setNextPage] = useState(0);
    const [competition, setCompetition] = useState([]);

    useEffect(() => {
        loadCompetition();
    }, [nextPage]);

    const loadCompetition = () => {
        controllServiceCompetition.paginateCompetition(nextPage)
            .then(data => {
                setCompetition(data);
            })
            .catch(err => {
                console.log('Erro ao paginar competicao. Erro --> ' + err);
            });
    }

    const handleNextPage = (e) => {
        e.preventDefault();
        setNextPage(nextPage + 1);
    }

    const handleBeforePage = (e) => {
        e.preventDefault();
        if (nextPage > 0) {
            setNextPage(nextPage - 1);
        } else {
            setNextPage(0);
        }
    }

    return (
        <>
            <h1> Hello World! </h1>
            {competition.docs ? (
                <ul>
                    {competition.docs.map((doc, index) => (
                        <li key={index}>{doc.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No competition data available.</p>
            )}
            <button onClick={(e) => handleNextPage(e)}>Próximo</button>
            <button onClick={(e) => handleBeforePage(e)}>Voltar</button>
        </>
    );
}

export default Homefree;
