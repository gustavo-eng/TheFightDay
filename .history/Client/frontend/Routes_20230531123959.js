
import { BrowserRouter, Route, Routes } from 'react-router-dom';


//Screens
import Home from './src/pages/Home';
import LoginScreen from './src/pages/Login';

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