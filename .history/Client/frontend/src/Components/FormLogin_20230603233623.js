import React from "react";


//css
import './formLogin.css';


const FormLogin  =  () => {
    return (
        <>
            <div class="container_proposta">

            <p class= "p_proposta">
                            Este projeto visa desenvolver um sistema que oferece suporte à gestão de atletas e competições, com o objetivo de facilitar a administração das academias de judô e da Federação Paranaense de Judô. O sistema será completamente integrado aos dados da Confederação Brasileira de Judô (CBJ). Os atletas serão responsáveis por inserir suas informações e comprovante de pagamento para as competições em que participarão. Os professores, por sua vez, irão revisar e confirmar todas as informações fornecidas pelos atletas, garantindo que, no dia em que a federação verificar os dados, tudo esteja correto e organizado. As categorias e faixas etárias serão inseridas pelos próprios atletas. Cada atleta e professor terá acesso ao formulário específico de sua academia, enquanto a Federação Paranaense terá acesso a todas as academias e aos dados dos alunos relacionados à competição.
            </p>
                <h2 class="proposta_title">Bem-vindo ao site!</h2>
                <div class="container_login">
                    <div class="login-form">

                    <h2> Login  </h2>
                    <div class="container_form">
                        <form>

                        <input
                            type="text"
                            placeholder="Usuário"
                            name="user"
                            value={user}
                            onChange={handleUserChange}
                            required
                        />
                            <input type="password" placeholder="Senha" name="password" required />
                            <button type="submit">Entrar</button>

                        </form>
                    </div>
                    </div>
                </div>
        </div>
        <img   id= "fundo"src="https://static.wixstatic.com/media/5b4b97_a56bf4008973433bb99533d525220bad~mv2.png/v1/fill/w_1895,h_926,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/5b4b97_a56bf4008973433bb99533d525220bad~mv2.png" alt="federacao" />
     </>

    )
}

// <div className="container_form">
// <form onSubmit={handleSubmit}>

//     <input
//         type="password"
//         placeholder="Senha"
//         name="password"
//         value={password}
//         onChange={handlePasswordChange}
//         required
//     />
//     <button type="submit">Entrar</button>
// </form>
// {/* Apenas  para fins de testes  */}
// {/* <button onClick={() => navigate('/home')}> Ir para logado  -- Home  -- </button> */}
// </div>




export default FormLogin;

