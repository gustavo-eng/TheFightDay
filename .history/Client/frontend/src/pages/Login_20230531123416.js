import React from 'react';

const LoginScreen  = (props) => {
    return (
        <>
            <div class="container_form">
                <form>

                                <input type="text" placeholder="Usuário" name="user" required />
                                <input type="password" placeholder="Senha" name="password" required />
                                <button type="submit">Entrar</button>

                </form>
            </div>
        </>
    )
}



export default LoginScreen;
