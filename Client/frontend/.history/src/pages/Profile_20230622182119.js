import React, { useState } from "react";
import taskService from '../service/taskServiceUser';
import './profile.css';

import ReactModal from "react-modal";


// import ReactModal from "react-modal";


import { useNavigate } from 'react-router-dom';

import validateFields from "../utils/validateFields";


const Profile = (props) => {
    ReactModal.setAppElement('#root');

    console.log(taskService)

    const navigate = useNavigate()
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selectedPermission, setSelectedPermission] = useState('');

    const [isModal, setIsModal] = useState(false)

    const username = localStorage.getItem('user')
    const userId = localStorage.getItem('userId')
    const token = localStorage.getItem('token')

    const [validateUpdateUser, setValidateUpdateUser] = useState(false)

    const handlePermissionChange = (event) => {
        setSelectedPermission(event.target.value);
    };

    const handleUserChange = (e) => {
        setUser(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    //updateUser: async (id, token, email, user, password,permission)
    //const validatorUpdateUser = (user, password, email) =>
    const handleUpdateUser  = async (evt) => {
        evt.preventDefault()
        if(validateFields.validatorUpdateUser(user, password, email)) {
            const response = await taskService.updateUser(userId, token, email, user, password, selectedPermission)
            alert("Usuário atualizado com sucesso!. new User --> ")
            console.log(response)
            response.then((data) => {
                const user = data;
                console.log('usuario alterado')
                console.log('Sucesso ao atualizar user')
                console.log(user);
              }).catch((error) => {
                console.error(error);
            });
        } else {
            setValidateUpdateUser(true)
            setTimeout(() => {
                setValidateUpdateUser(false)
            }, 2500)
        }




    }

    const handleDeleteUser = async (evt) => {
        evt.preventDefault()
        if(window.confirm('Tem certeza que deseja deletar usuario')) {
            const response = await taskService.deleteUser(userId, token)
            console.log('Uuario deletado com sucesso')
            response.then((data) => {
                const user = data;
                console.log(user);
              }).catch((error) => {
                console.error(error);
            });
        }

    }


    // Modal ====
    const handleOpenedModal = async (e) => {
        e.preventDefault()
        setIsModal(!isModal)
    }




    const BarChart = () => {
        const options = {
          chart: {
            id: "bar-chart",
          },
          xaxis: {
            categories: ["Usuários", "Pagamentos", "Competições"],
          },
        };

        const series = [
          {
            name: "Quantidade",
            data: [10, 15, 8],
          },
        ];

        // return (
        //   <Chart
        //     options={options}
        //     series={series}
        //     type="bar"
        //     height={350}
        //     width={500}
        //   />
        // );
      };

    return (
        <>
             <div className="container_contato">
                <ReactModal
                    isOpen={isModal}
                    contentLabel="Modal de estatística"
                    className="modal_statistics"
                    // onRequestClose={close}
                >
                    <h3>Estatísca</h3>

                    <h1>Gráfico de Barras</h1>
                    <BarChart />


                    <button onClick={handleOpenedModal}> Close Modal </button>
                </ReactModal>

                <h2>  Usuário : {username}  </h2>
                <form id="contact-form"  >
                    <div className="form-group">
                        <label for="name">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            name="user"
                            placeholder={username ? username : "Novo usuário..."}
                            onChange={handleUserChange}
                            required
                        />

                    </div>
                    <div className="form-group">
                        <label for="email">E-mail:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email..."
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label for="subject">Senha:</label>
                        <input
                            type="password"
                            id="subject"
                            name="password"
                            placeholder="Nova senha... "
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <h4>Permissão:</h4>
                    <select id="permissionSelect" value={selectedPermission} onChange={handlePermissionChange} >
                        <option value="aluno">Escolha</option>
                        <option value="aluno">Aluno</option>
                        <option value="sensei">Sensei</option>
                    </select>
                    <button onClick={handleUpdateUser} className="submit-btn">Atualizar</button>
                    <button onClick={handleDeleteUser} className="submit-btn del ">Deletar usuário</button>
                    <button onClick={() => navigate('/payments')} className="submit-btn pay ">Meus pagamentos</button>
                    <button onClick={handleOpenedModal} className="open_modal_estatistic" >Minhas estatísticas </button>
                    {validateUpdateUser && (
                        <h5 className="error-update-user">Erro ao atualizar usuario. Campos inválidos </h5>
                    )}
                </form>
                <div id="success-message" className="success-message"></div>
                <div id="error-message" className="error-message"></div>
            </div>
        </>
    )
}


export default Profile;