import React, { useState } from "react";
import taskService from '../service/taskServiceUser';
import './profile.css';

const Profile = (props) => {
    console.log(taskService)
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selectedPermission, setSelectedPermission] = useState('');

    const username = localStorage.getItem('user')
    const userId = localStorage.getItem('userId')

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


    const handleUpdateUser  = async () => {

    }

    return (
        <>
             <div className="container_contato">
                <h2>   {username}  </h2>
                <form id="contact-form"  >
                    <div className="form-group">
                        <label for="name">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            name="user"
                            placeholder="Novo usuário..."
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
                    <button type="submit" className="submit-btn del ">Deletar</button>
                </form>
                <div id="success-message" className="success-message"></div>
                <div id="error-message" className="error-message"></div>
            </div>
        </>
    )
}

export default Profile;