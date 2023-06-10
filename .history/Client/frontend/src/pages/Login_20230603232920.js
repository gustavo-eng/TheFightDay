import React, { useState } from 'react';
import taskService from '../service/taskService';

import { useNavigate } from 'react-router-dom';


//css
import FormLogin from '../Components/FormLogin';


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
        <FormLogin />
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



