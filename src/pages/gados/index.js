import React from "react";
import '../../cssteste.css'
import { useState, useEffect } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

function initialState(){
    return {id:''}
}

const Gado = () =>{
  const [gadosData,setGadosData] = useState([])
  const [values,setValues] = useState(initialState)
  //const [gadosId,setGadosId] = useState("")
  
 

    useEffect(() => {
      axios.get('http://localhost:5000/api/gado')
      .then((response) => {
        setGadosData(response.data)
        
      })
    }, [])

    function onChange(event){
        const {value, name} = event.target
        setValues({
          ...values,
          [name] : value,
        })
    }


    return (
        <div class="container-center-horizontal">
            <div class="banco-de-dados-da-fazenda screen">
            <div class="overlap-group">
                <div class="overlap-group1">
                <input name="id" onChange={onChange} value={values.id}></input>
                <Link to={{
                     pathname: "/look",
                      aboutProps: {
                        id: values.id
                     }
                    }}>
                     <img class="search" src="https://anima-uploads.s3.amazonaws.com/projects/6136aea879196f7985bdd4ed/releases/6136aebdacb07f15328e9e4d/img/search@2x.png"/>
               </Link>
                </div>
                <a href="tela-de-preenchimento.html"><img class="add-new" src="https://anima-uploads.s3.amazonaws.com/projects/6136aea879196f7985bdd4ed/releases/6136aebdacb07f15328e9e4d/img/add-new@2x.png"/> </a>
                <Link to={"new"}>
                    <img class="add-new" src="https://anima-uploads.s3.amazonaws.com/projects/6136aea879196f7985bdd4ed/releases/6136aebdacb07f15328e9e4d/img/add-new@2x.png"/>                         
                </Link>
                <img class="logo-removebg-preview-3" src="https://anima-uploads.s3.amazonaws.com/projects/6136aea879196f7985bdd4ed/releases/6136aebdacb07f15328e9e4d/img/logo-removebg-preview-3@2x.png"/>

            <div className="tabela">
                    {gadosData.map((data) => {
                        return(
                            <table >
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.num_pai}</td>
                                    <td>{data.num_mae}</td>
                                    <td>{data.peso}</td>
                                    <td>{data.raca}</td>
                                    <td>{data.pelagem}</td>
                                    <td>{data.sistema}</td>
                                    <td>{data.meses}</td>
                                    <td>{data.fase}</td>
                                    <td>{data.vacinas}</td>
                                    <td>{data.data_nasc}</td>
                                    <td>{data.producao}</td>
                                    <td>{data.sexo}</td>
                                    <td>
                                        <Link to={{
                                            pathname: "/update",
                                            aboutProps: {
                                                id: data.id
                                            }
                                        }}>
                                            <img class="edit" src="https://anima-uploads.s3.amazonaws.com/projects/6136aea879196f7985bdd4ed/releases/6136aebdacb07f15328e9e4d/img/edit@2x.png"/>
                                        </Link>
                                    </td>
                                </tr>
                            </table>
                        )
                    })}
            </div>
            </div>
        </div>
    </div>

    )
}

export default Gado