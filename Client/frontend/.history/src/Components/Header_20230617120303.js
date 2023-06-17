

import '../Components/header.css';


const Header = () => {
    return (
        <header>
        <nav>
        <div class="logo">
            <a href="#">
                <img src="https://static.wixstatic.com/media/5b4b97_a2e5c36cfd584f3aa512ad8b07f30727~mv2.png/v1/fill/w_111,h_121,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/NOVVA%20LOGO%20COM%20EFEITO%20SEM%20SOMBRA.png" alt="Logo"/>
            </a>
        </div>
            <ul class="menu">
                {/* ROTA LOGOUT colocar logica para saida do usuario , as demais colocar https para servidor  */}
                <li><a href="http://localhost:3333/index/logout">Proposta</a></li>
                <li><a href="http://localhost:3333/index/description">Detalhes</a></li>
                <li><a href="http://localhost:3333/index/desenvolvedor">Desenvolvedor</a></li>
                <li><a href="http://localhost:3333/index/tecnologia">Tecnologias</a></li>
                <li><a href="http://localhost:3333/index/contato">Contato</a></li>
                <li><a href="http://localhost:3333/index/logout">Sair</a></li>
                <li><a href="/profile">Profile</a></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;