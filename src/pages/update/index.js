import React, { Component } from "react";
import { useState, useEffect } from 'react';
import axios from 'axios'
import '../../cssteste.css'
import {Link} from 'react-router-dom'

const Update = (props) => {

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


    function changeHandler(e){
        const value = e.target.value;
        setState({
        ...state,
        [e.target.name]: value
    });
    }

    function delGado(){
        const mensagem = "Deseja realmente excluir?"
        var resultado = window.confirm(mensagem);
        if(resultado===true){
        axios.delete(`http://localhost:5000/api/gado/${ret.id}`)
          .then(response => {
            if(response.data != null) {
              console.log("Gado Deletado");
            }
          })
          .catch(error => {
            console.log(error)
          })
        }
    }

    function submitHandler (e) {
        e.preventDefault();
        console.log(state);
        axios.patch(`http://localhost:5000/api/gado/${ret.id}`, state)
          .then(response => {
            if(response.data != null) {
              console.log("Gado Atualizado");
            }
          })
          .catch(error => {
            console.log(error)
          })
      }

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
                onChange={changeHandler}
                />
             </label>
            <label>
            Numero mae
            <input
                class="numero-da-me montserrat-normal-black-18px"
                type="text"
                name="num_mae"
                value={state.num_mae}
                onChange={changeHandler}
                />
             </label>
            <label>
            Peso
            <input
                class="peso montserrat-normal-black-18px"
                type="text"
                name="peso"
                value={state.peso}
                onChange={changeHandler}
                />
             </label>
            <label>
            Raça
            <input
                class="raa montserrat-normal-black-18px"
                type="text"
                name="raca"
                value={state.raca}
                onChange={changeHandler}
                />
             </label>
            <label>
            Pelagem
            <input
                class="pelagem montserrat-normal-black-18px"
                type="text"
                name="pelagem"
                value={state.pelagem}
                onChange={changeHandler}
                />
             </label>
            <label>
            Sistema
            <input
                class="place montserrat-normal-black-18px"
                type="text"
                name="sistema"
                value={state.sistema}
                onChange={changeHandler}
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
                onChange={changeHandler}
                />
             </label>
            <label>
            Meses
            <input
                class="meses montserrat-normal-black-18px"
                type="text"
                name="meses"
                value={state.meses}
                onChange={changeHandler}
                />
             </label>
            <label>
            Fase
            <input
                class="fase montserrat-normal-black-18px"
                type="text"
                name="fase"
                value={state.fase}
                onChange={changeHandler}
                />
             </label>
            <label>
            Vacinas
            <input
                class="data-de-nascimento montserrat-normal-black-18px"
                type="text"
                name="vacinas"
                value={state.vacinas}
                onChange={changeHandler}
                />
             </label>
            <label>
            Data de Nascimento
            <input
                class="data-de-nascimento montserrat-normal-black-18px"
                type="text"
                name="data_nasc"
                value={state.data_nasc}
                onChange={changeHandler}
                />
             </label>
            <label>
            Produção
            <input
                class="produo montserrat-normal-black-18px"
                type="text"
                name="producao"
                value={state.producao}
                onChange={changeHandler}
                />
             </label>
            <label>
            Sexo
            <input
                class="sexo montserrat-normal-black-18px"
                type="text"
                name="sexo"
                value={state.sexo}
                onChange={changeHandler}
                />
             </label>
          </div>
          <div class="overlap-group2">
                <Link  to="/gados">
                    <button class="rectangle-21 inserir montserrat-normal-black-24px">Voltar</button>
                </Link>
                <button class="rectangle-21 inserir montserrat-normal-black-24px" type="submit" onClick={submitHandler}>Atualizar</button>
                <button class="rectangle-21 inserir montserrat-normal-black-24px" type="submit" onClick={delGado}>Deletar</button>
                </div>
        </div>
          </div>
        </div>
        
    )
}

export default Update