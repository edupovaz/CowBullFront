import React, { Component } from "react";
import { useState, useEffect } from 'react';
import axios from 'axios'
import '../../cssteste.css'
import {Link} from 'react-router-dom'

const Look = (props) => {

    const [gado,setGado] = useState([])
    const [state, setState] = React.useState({
            id: "",
            num_pai: "",
            num_mae: "",
            peso: "",
            raca: "",
            pelagem: "",
            sistema: "",
            pasto: "",
            meses: "",
            fase: "",
            vacinas: "",
            data_nasc: "",
            producao: "",
            sexo: ""
      })


    const ret = props.location.aboutProps

    
    useEffect(() => {
        axios.get(`http://localhost:5000/api/gado/${ret.id}`)
        .then((response) => {
          setGado(response.data)
          setState(response.data)
        })
      }, [])

    

    return(
        <div class="container-center-horizontal">
            <div class="tela-de-preenchimento screen">
            <div class="overlap-group">
            <div class="flex-col">
            <label>
            Numero Pai
            <input
                class="numero-do-pai montserrat-normal-black-18px"
                type="text"
                name="num_pai"
                value={state.num_pai}
                onChange={""}
                />
             </label>
            <label>
            Numero mae
            <input
                class="numero-da-me montserrat-normal-black-18px"
                type="text"
                name="num_mae"
                value={state.num_mae}
                onChange={""}
                />
             </label>
            <label>
            Peso
            <input
                class="peso montserrat-normal-black-18px"
                type="text"
                name="peso"
                value={state.peso}
                onChange={""}
                />
             </label>
            <label>
            Raça
            <input
                class="raa montserrat-normal-black-18px"
                type="text"
                name="raca"
                value={state.raca}
                onChange={""}
                />
             </label>
            <label>
            Pelagem
            <input
                class="pelagem montserrat-normal-black-18px"
                type="text"
                name="pelagem"
                value={state.pelagem}
                onChange={""}
                />
             </label>
            <label>
            Sistema
            <input
                class="place montserrat-normal-black-18px"
                type="text"
                name="sistema"
                value={state.sistema}
                onChange={""}
                />
             </label>
            </div>
            <div class="flex-col-1">
            <label>
            Pasto
            <input
                class="place-1 montserrat-normal-black-18px"
                type="text"
                name="pasto"
                value={state.pasto}
                onChange={""}
                />
             </label>
            <label>
            Meses
            <input
                class="meses montserrat-normal-black-18px"
                type="text"
                name="meses"
                value={state.meses}
                onChange={""}
                />
             </label>
            <label>
            Fase
            <input
                class="fase montserrat-normal-black-18px"
                type="text"
                name="fase"
                value={state.fase}
                onChange={""}
                />
             </label>
            <label>
            Vacinas
            <input
                class="data-de-nascimento montserrat-normal-black-18px"
                type="text"
                name="vacinas"
                value={state.vacinas}
                onChange={""}
                />
             </label>
            <label>
            Data de Nascimento
            <input
                class="data-de-nascimento montserrat-normal-black-18px"
                type="text"
                name="data_nasc"
                value={state.data_nasc}
                onChange={""}
                />
             </label>
            <label>
            Produção
            <input
                class="produo montserrat-normal-black-18px"
                type="text"
                name="producao"
                value={state.producao}
                onChange={""}
                />
             </label>
            <label>
            Sexo
            <input
                class="sexo montserrat-normal-black-18px"
                type="text"
                name="sexo"
                value={state.sexo}
                onChange={""}
                />
             </label>
          </div>
          <div class="overlap-group2">
        </div>
        </div>
          </div>
        </div>
        
    )
}

export default Look