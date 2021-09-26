import React from "react";
import '../../cssteste.css'
import { useState, useEffect} from 'react';
import Logo from "../../images/logo-circular.png"
import axios from "axios";
import { useHistory } from "react-router";

function initialState(){
    return {user:'', password:''}
}

const Login = () => {
    const [values,setValues] = useState(initialState)
    const [loginData,setLoginData] = useState([])
    const [frigoData,setFrigoData] = useState([])
    const history = useHistory()
  
 

    useEffect(() => {
      axios.get('http://localhost:5000/api/farm')
      .then((response) => {
        setLoginData(response.data)
        
      })
      axios.get('http://localhost:5000/api/fridge')
      .then((response) => {
        setFrigoData(response.data)
        
      })
    }, [])
    
    function onChange(event){
        const {value, name} = event.target
        setValues({
          ...values,
          [name] : value,
        })
    }

    function login({ user, password}){
      loginData.forEach((data) => {
        if(data.login === user && data.password === password){
          history.push('/gados')
          return(true)
        }
      })
    }

    function loginFrigo({ user, password}){
      frigoData.forEach((data) => {
        if(data.login === user && data.password === password){
          history.push('/frigo')
          return(true)
        }
      })
    }

    function onSubmit(event) {
      event.preventDefault()
      login(values)
      setValues(initialState)
    }
    function onSubmitFrigo(event) {
      event.preventDefault()
      loginFrigo(values)
      setValues(initialState)
    }


  return(
    <div className="container-center-horizontal">
      <div className="tela-de-login screen">
        <form>

        <div className="overlap-group">
          <img className="logo-removebg-preview-2" src={Logo} alt=""/>
          <div className="overlap-group1">
          <div className="login montserrat-normal-black-36px">Login</div>
            <div className="email montserrat-normal-black-24px">Email</div>
            <input type="text" name="user" onChange={onChange} value={values.user}></input>
          <div className="senha montserrat-normal-black-24px">Senha</div>
          <input type="password" name="password" onChange={onChange} value={values.password}></input>
          <div className="overlap-group2">
              <button className="boto-de-entrar" onClick={onSubmit}>
                Entrar Fazenda
              </button>
              <button className="boto-de-entrar" onClick={onSubmitFrigo}>
                Entrar Frigorífico
              </button>
          </div>
        </div>
        </div>
         </form>
      </div>
    </div>
    
  )
}

export default Login;