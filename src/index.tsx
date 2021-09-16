import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component= {Home} exact/>
      <Route path="/login" component= {Login}/>
      <Route path="/cadastro" component= {Cadastro}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);