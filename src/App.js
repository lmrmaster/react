
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/condicionais';
import OutraLista from './components/OutraLista'
import SeuNome from './components/SeuNome';
import {useState} from 'react'
import Saudacao from './components/Saudacao';
import {BrowserRouter as Router,Route,link}from 'react-router-dom'
import Home from './components/pages/home';
import Empresa from './components/pages/Empresas';
import Contato from './components/pages/contato';
import NavBar from './components/pages/NavBar';



function App() {

  const MeusItens=['react','vue','angular']
  const [nome,setNome] =useState()
 
  return (
    <div className="App">
      <h1>testando Evento</h1>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/empresa'>
            <Empresa/>
          </Route>
          <Route path='/contato'>
            <Contato/>
          </Route>
        </switch>
      </Router>
      <Evento/>
      <Form/>
      <Condicional></Condicional>
      <OutraLista itens={MeusItens}/>
      <SeuNome setNome={setNome}/>
     <Saudacao nome={nome}/>
    </div>
  );
}

export default App;
