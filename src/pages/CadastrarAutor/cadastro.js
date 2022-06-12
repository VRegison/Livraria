import React from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { FormCadastroAutor } from "../../components/FormCadastroAutor";


export function CadastroAutor(){
    return(
        <div>
            <Header/>
            <FormCadastroAutor/>
            <Footer/>
        </div>
    )
}

