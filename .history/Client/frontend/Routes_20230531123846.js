
import { BrowserRouter, Route, Routes } from 'react-router-dom';


//Screens
import Home from './src/pages/Home';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}
