import React, { useEffect, useState } from "react";
import AutorController from  '../../controllers/autorController'
import { Input } from "../input";
import "./style.css";

export function FormCadastro() {
  const [autor,setAutor] = useState([])
  const [select,setSelect]= useState()
  
  async function listaAutores(){
    const response = await  AutorController.listarAutores();
    setAutor(response);
    console.log(response)
  }
  useEffect(  ()=>{
  
    listaAutores()
  },[])
  return (
    <div className="container">
        <h1>Cadastrar Um Livro</h1>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Titulo</label>
          <Input
            type="text"
            classe="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Nome do livro"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Capa</label>
          <Input
            type="text"
            classe="form-control"
            placeholder="Capa do livro"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Autor</label>
         <select value={select} onChange={e => setSelect(e.target.value)}>
           {autor.map((item)=>{
             return(
              <option value={item._id}>{item.nome}</option>
             )
           })}
         </select>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Editora</label>
          <Input
            type="text"
            classe="form-control"
            placeholder="Capa do livro"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Numero de Páginas</label>
          <Input
            type="number"
            classe="form-control"
            placeholder="Capa do livro"
          />
        </div>
       
        <button onClick={(e)=>{
          e.preventDefault()
          console.log(select)
          
          }} class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
