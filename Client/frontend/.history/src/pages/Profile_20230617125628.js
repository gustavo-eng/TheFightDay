import React, { useState } from "react";

import './profile.css';

const Profile = () => {

    const [selectedPermission, setSelectedPermission] = useState('');

    const handlePermissionChange = (event) => {
        setSelectedPermission(event.target.value);
    };

    return (
        <>
             <div className="container_contato">
                <h2>  Entre em Contato  </h2>
                <form id="contact-form"  >
                    <div className="form-group">
                        <label for="name">Nome:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label for="email">E-mail:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label for="subject">Senha:</label>
                        <input type="password" id="subject" name="password" required />
                    </div>
                    <select id="permissionSelect" value={selectedPermission} onChange={handlePermissionChange} >
                        <option value="aluno">Escolha</option>
                        <option value="aluno">Aluno</option>
                        <option value="sensei">Sensei</option>
                    </select>
                    <button type="submit" className="submit-btn">Enviar</button>
                </form>
                <div id="success-message" className="success-message"></div>
                <div id="error-message" className="error-message"></div>
            </div>
        </>
    )
}

export default Profile;