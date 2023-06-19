
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PrivateRoute from '../utils/PrivateRoute';

//Screens
import Home from '../pages/Home';
import LoginScreen from '../pages/Login';
import Profile from '../pages/Profile';

// USAR VIDEO DA ROCKETSEAT APENAS PARA VERIFICAR  SE NO  localstorage, existe o token
//caso tiver token, isAutenticated  = true e a rota privada para home podera ser renderizada





const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute/>}>
                    <Route path='/home' element={<Home/>}  />
                    <Route path='/profile' element={<Profile/>}  />
                    <Route path='/payments' element={<Profile/>}  />
                </Route>
                <Route path="/" element={<LoginScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;