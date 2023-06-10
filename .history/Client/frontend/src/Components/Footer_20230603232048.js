import React from 'react';

import './footer.css';



const Footer = () => {

    return (
        <footer>
        <div class="container">
            <div class="footer-logo">

            </div>
                <div class="footer-links">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Calendário</a></li>
                        <li><a href="#">Notícias</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>
            <div class="footer-social">
                <a href="#"><img src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_33,h_33,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/23fd2a2be53141ed810f4d3dcdcd01fa.png" alt="Facebook"/></a>
                <a href="#"><img src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_33,h_33,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/81af6121f84c41a5b4391d7d37fce12a.png" alt="Instagram"/></a>
                <a href="#"><img src="https://static.wixstatic.com/media/203dcdc2ac8b48de89313f90d2a4cda1.png/v1/fill/w_33,h_33,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/203dcdc2ac8b48de89313f90d2a4cda1.png" alt="YouTube"/></a>
            </div>
          </div>
        </footer>
    )

}

export default Footer;