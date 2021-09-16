import React from "react"
import '../../cssteste.css'
import Logo from "../../images/logo-circular.png"
import Sub from "../../images/subtitulo.png"

import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <div className="container-center-horizontal">
            <div className="tela-inicial screen">
            <div className="overlap-group">
                <img className="logo-circular" src={Logo} alt=""/>
                <div className="flex-col">
                    <img className="uma-ferramenta-do-seu-rebanho" src={Sub} alt=""/>
                        <div className="flex-row">
                            <div className="overlap-group1">
                                <Link to="/login"> 
                                    <button className="boto">
                                        Login
                                    </button>
                                </Link>
                            </div>
                            <div className="overlap-group2">
                                <Link to="/cadastro">
                                    <button className="boto">
                                        Cadastro
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home