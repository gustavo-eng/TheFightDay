
import { BrowserRouter, Route, Routes } from 'react-router-dom';


//Screens
import Home from './pages/Home';
import LoginScreen from './pages/Login';


// USAR VIDEO DA ROCKETSEAT APENAS PARA VERIFICAR  SE NO  localstorage, existe o token
//caso tiver token, isAutenticated  = true e a rota privada para home podera ser renderizada

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<LoginScreen />} />
            </Routes>
        </BrowserRouter>
    )
}


export default Rotas;