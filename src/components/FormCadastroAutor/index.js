import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

import AutoresController from '../../controllers/autorController'
import { Input } from "../input";

import Swal from 'sweetalert2'
import "./style.css";

export function FormCadastroAutor() {
  const [nomeAutor, setNomeAutor] = useState("");
  const [nacionalidade, setNacionalidade] = useState("");
  const navegar = useNavigate();

  async function CadastrarAutor(){
    const response = await AutoresController.cadastrarAutor(nomeAutor,nacionalidade);
    if(response){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: response,
        showConfirmButton: false,
        timer: 1500
      })
      navegar('/');
    }
    else{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: response,
        showConfirmButton: false,
        timer: 1500
      })
    }
   
  }
  return (
    <div className="container">
      <h1>Cadastrar Autor</h1>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Nome</label>
          <Input
            onChange={(t) => setNomeAutor(t.target.value)}
            value={nomeAutor}
            type="text"
            classe="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Nome do autor"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Nacionalidade</label>
          <Input
            onChange={(t) => setNacionalidade(t.target.value)}
            value={nacionalidade}
            type="text"
            classe="form-control"
            placeholder="Nacionalidade do autor"
          />
        </div>

        <button onClick={async(e)=>{
          e.preventDefault();
         CadastrarAutor()
          }} type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
