import React from "react";


//css
import './formLogin.css';


const FormLogin  =  () => {
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

export default FormLogin;

