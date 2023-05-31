import React, { useState } from 'react';
import taskService from '../service/taskService';

const LoginScreen  = (props) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleUserChange = (e) => {
        setUser(e.target.value);
    };

      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      const response = await taskService.login(user, password)
      console.log(' Response dentro do handleSubmit')
      console.log(response)

      const token = response.token
      localStorage.setItem('token', token)



    }

/*  colocar tudo isso no component  <formLogin />*/

    return (
        <>
            <div className="container_form">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Usuário"
                        name="user"
                        value={user}
                        onChange={handleUserChange}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                    <button type="submit">Entrar</button>
        </form>
      </div>
        </>
    )
}



export default LoginScreen;



/* API_KEY_pass

import React, { useState } from 'react';

const LoginScreen = (props) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Chame a função async passando o usuário e a senha
    const response = await login(user, password);

    // Faça algo com a resposta (exemplo: redirecionar para outra página)
    if (response.success) {
      props.history.push('/dashboard');
    } else {
      alert('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  const login = async (user, password) => {
    const data = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ user: user, password: password }),
    };

    const response = await fetch('http://localhost:3333', data);
    return await response.json();
  };

  return (
    <>
      <div className="container_form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Usuário"
            name="user"
            value={user}
            onChange={handleUserChange}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </>
  );
};

export default LoginScreen;


*/