import React from "react";


const Home = () => {
    localStorage.removeItem('token') // retirar
    return (
        <>
            <h1> User logged! Succes.   </h1>
        </>
    )
}


export default Home;