import React from "react";


//css
import './formLogin.css';


const FormLogin  =  () => {
    return (
        <div class="login-form">

            <h2> Login  </h2>
            <form>

                <input type="text" placeholder="Usuário" required />
                <input type="password" placeholder="Senha" required />
                <button type="submit">Entrar</button>

            </form>
        </div>

    )
}

export default FormLogin;

