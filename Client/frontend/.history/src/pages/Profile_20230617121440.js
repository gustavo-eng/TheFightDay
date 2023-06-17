import React from "react";

import './profile.css';

const Profile = () => {





    return (
        <>
             <div class="container_contato">
                <h2>  Entre em Contato  </h2>
                <form id="contact-form"  action="/contato" method="POST">
                    <div className="form-group">
                        <label for="name">Nome:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label for="email">E-mail:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label for="subject">Assunto:</label>
                        <input type="text" id="subject" name="subject" required />
                    </div>
                    <div className="form-group">
                        <label for="message">Mensagem:</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Enviar</button>
                </form>
                <div id="success-message" class="success-message"></div>
                <div id="error-message" class="error-message"></div>
            </div>
        </>
    )
}

export default Profile;