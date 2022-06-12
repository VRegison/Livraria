import React from "react";
import {
    BrowserRouter ,Routes,Route
} from 'react-router-dom'
import { Cadastro } from "../pages/CadastrarLivro/cadastro";
import { CadastroAutor } from "../pages/CadastrarAutor/cadastro";

import { Home } from "../pages/Home/home";

export function MyRoutes(){
    return(
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cadastrarLivro" element={<Cadastro/>}/>
            <Route path="/cadastrarAutor" element={<CadastroAutor/>}/>

        </Routes>
      </BrowserRouter>
    )
}