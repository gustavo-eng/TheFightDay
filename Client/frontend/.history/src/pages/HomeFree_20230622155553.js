// aqui vai ser renderizado o que tem em Home, mas sem o botao de pagar
import React, { useEffect, useState } from "react";

import './homeFree.css';

const  Homefree = (props) => {
    const [nextPage, setNextPage] = useState(0)

    useEffect(() => {

    }, [])

    const handleNextPage = (e) => {
        e.preventDefault()

    }

    return (
        <>
            <h1> Hello World ! </h1>
            <button onClick={(e)=>  }>Próximo</button>
        </>
    )

}

export default Homefree;