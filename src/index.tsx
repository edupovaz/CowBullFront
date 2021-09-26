import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login/index';
import Cadastro from './pages/Cadastro';
import Gado from './pages/gados/index.js';
import Update from './pages/update/index.js';
import New from './pages/new/index.js';
import StoreProvider from './components/Store/Provider'
import Frigo from './pages/frigo/index'
import Look from './pages/look/index'

ReactDOM.render(
  <BrowserRouter>
    <StoreProvider>
    <Switch>
      <Route path="/" component= {Home} exact/>
      <Route path="/login" component= {Login}/>
      <Route path="/cadastro" component= {Cadastro}/>
      <Route path="/gados" component= {Gado}/>
      <Route path="/update" component= {Update}/>
      <Route path="/new" component= {New}/>
      <Route path="/frigo" component= {Frigo}/>
      <Route path="/look" component= {Look}/>
    </Switch>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root')
);