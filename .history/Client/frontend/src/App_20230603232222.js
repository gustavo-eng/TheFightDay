
import './App.css';

//Components
import Footer from './Components/Footer';
import Header from './Components/Header';


import Rotas from './routes/Routes';


function App() {
  return (
    <div className="App">
        <Header />
          <Rotas />
        <Footer/>
    </div>
  );
}



export default App;
