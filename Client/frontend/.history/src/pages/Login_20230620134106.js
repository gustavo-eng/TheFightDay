import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import taskService from '../service/taskServiceUser';

//css
import '../Components/formLogin.css';
import validateFields from '../utils/validateFields';

const LoginScreen  = (props) => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newUser, setNewUser] = useState(false);
    const [contUser, setContUser] = useState(0);
    const [selectedPermission, setSelectedPermission] = useState('');

    const [validatorRegister, setValidatorRegiste] = useState(false)

    const navigate = useNavigate()

    const handleUserChange = (e) => {
        setUser(e.target.value);
    };

    const handlePermissionChange = (event) => {
        setSelectedPermission(event.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    //falta o handleEmailChange

    useEffect(() => {
        // localStorage.removeItem('token')
        localStorage.clear()
    }, [])

    const handleSubmit = async (e) => {
      e.preventDefault();
     validateFields.validatorUpdateUser()
     validateFields.validatorNewCompetition()
      console.log('Clicou no Entrar')
      const response = await taskService.login(user, password)
      console.log(' Response dentro do handleSubmit')
      console.log(response)

      const token = response.token
      localStorage.setItem('token', token);
      localStorage.setItem('userId', response.userId)
      localStorage.setItem('user', response.user)
      localStorage.setItem('permission', response.userPermission)
      navigate('/home')

    }

    const handleNewUser = async (evt) => {
        evt.preventDefault();
        setNewUser(!newUser)
        setContUser(contUser + 1)
        console.log(contUser)
        //(user, password, email, permission)
        if(contUser > 0) { //cadastar
            console.log(`user.length -> ${user.length}`)
            if(user.length > 3 && password.length > 3) {
                const response = await taskService.register(user, password, email, selectedPermission)
                console.log(response)

            } else  {
                setValidatorRegiste(true)
                setTimeout(() => {
                    console.log('valores invalidos no log !!')
                    setValidatorRegiste(false)
                }, 3000)
            }
            setContUser(0)
        }
        console.log('contUser depois  do if ')
        console.log(contUser)
    }



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

                                {newUser == true ?
                                    <>
                                        <input
                                            type="text"
                                            placeholder="email"
                                            name="email"
                                            value={email}
                                            onChange={handleEmailChange}
                                            required
                                        />
                                        <select id="permissionSelect2" value={selectedPermission} onChange={handlePermissionChange} >
                                            <option value="aluno">Escolha</option>
                                            <option value="aluno">Aluno</option>
                                            <option value="sensei">Sensei</option>
                                        </select>
                                    </>
                                    : <button type="submit">Entrar</button>

                                }

                                <button onClick={handleNewUser}> Cadastrar </button>
                                {validatorRegister ?
                                    <>
                                        <h4 className='advice-error'>Valores inválidos ao cadastrar. Mínimo 3 caracteres</h4>
                                        <h5 className='repeat-register'>Refaça o cadastro !</h5>
                                    </>
                                    : null}

                            </form>
                        </div>
                        </div>
                    </div>
            </div>
            <img   id= "fundo"src="https://static.wixstatic.com/media/5b4b97_a56bf4008973433bb99533d525220bad~mv2.png/v1/fill/w_1895,h_926,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/5b4b97_a56bf4008973433bb99533d525220bad~mv2.png" alt="federacao" />
        </>
    )
}



export default LoginScreen;





