import React from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { FormCadastro } from "../../components/FormCadastro";


export function Cadastro(){
    return(
        <div>
            <Header/>
            <FormCadastro/>
            <Footer/>
        </div>
    )
}

