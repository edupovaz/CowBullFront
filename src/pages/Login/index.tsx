import React from "react";
import '../../cssteste.css'
import {Link} from 'react-router-dom'
import Logo from "../../images/logo-circular.png"

const Login = () => {
  return(
    <div className="container-center-horizontal">
      <div className="tela-de-login screen">
        <div className="overlap-group">
          <img className="logo-removebg-preview-2" src={Logo} alt=""/>
          <div className="overlap-group1">
          <div className="login montserrat-normal-black-36px">Login</div>
            <div className="email montserrat-normal-black-24px">Email</div>
            <input type="email"></input>
          <div className="senha montserrat-normal-black-24px">Senha</div>
          <input type="password"></input>
          <div className="overlap-group2">
            <Link to="">
              <button className="boto-de-entrar">
                Login
              </button>
            </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
    
  )
}

export default Login;