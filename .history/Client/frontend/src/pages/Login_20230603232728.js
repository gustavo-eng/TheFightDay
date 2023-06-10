import React, { useState } from 'react';
import taskService from '../service/taskService';

import { useNavigate } from 'react-router-dom';


//css
import '../Components/login.css';

const LoginScreen  = (props) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const handleUserChange = (e) => {
        setUser(e.target.value);
    };

      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log('Clicou no Entrar')
      const response = await taskService.login(user, password)
      console.log(' Response dentro do handleSubmit')
      console.log(response)

      const token = response.token
      localStorage.setItem('token', token);

      navigate('/home')

    }

/*  colocar tudo isso no component  <formLogin />*/

    return (

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

                                    <input type="text" placeholder="Usuário" name="user" required />
                                    <input type="password" placeholder="Senha" name="password" required />
                                    <button type="submit">Entrar</button>

                                </form>
                        </div>
                    </div>
                </div>
            </div>

    )
}



export default LoginScreen;



// <div className="container_form">
// <form onSubmit={handleSubmit}>
//     <input
//         type="text"
//         placeholder="Usuário"
//         name="user"
//         value={user}
//         onChange={handleUserChange}
//         required
//     />
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



