import React from "react";
import '../../cssteste.css'
import Logo from "../../images/logo-circular.png"
import { Link } from 'react-router-dom'

const Cadastro = () => {
    return(
        <div className="container-center-horizontal">
            <div className="tela-de-cadastro screen">
                <div className="overlap-group">
                    <img className="logo-removebg-preview-2" src={Logo} alt=""/>
                        <div className="overlap-group1">
                        <div className="text-1 montserrat-normal-black-36px">Formulário de cadastro</div>
                        <div className="place montserrat-normal-black-24px">Nome</div>
                        <input type="text"/>
                        <div className="email montserrat-normal-black-24px">Email</div>
                        <input type="email"/>
                        <div className="senha montserrat-normal-black-24px">Senha</div>
                        <input type="password"/>
                        <div className="confirme-sua-senha montserrat-normal-black-24px">Confirme sua senha</div>
                        <input type="password"/>
                        <div className="overlap-group2">
                            <Link to="">
                                <button className="boto-de-enviar">
                                    Cadastrar
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cadastro