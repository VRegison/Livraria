import React from "react";
import {Link} from 'react-router-dom';
import './style.css';
export function Header(){
    return(
        <header >
           <div className="header__options">
           <h1>
                Livraria Regison
            </h1>
            <nav>
            <Link className="links" to='/'>Home |</Link>
            <Link className="links" to='cadastrarAutor'>Cadastrar Autor |</Link>
            <Link className="links" to='cadastrarLivro'>Cadastrar Livro |</Link>
            </nav>
           </div>
        </header>
    )
}