import React, { useEffect, useState } from "react";
import LivrosController from "../../controllers/livrosController";
import "./style.css";

export function Main() {
  const [livros, SetLivros] = useState([]);

  useEffect(() => {
    async function listarLivros() {
      const data = await LivrosController.ListarFilmes();
      SetLivros(data);
    }
    listarLivros();
  }, []);

  return (
    <div className="cards">
      {livros.map((item) => {
        return (
         <div className="card">
             <img src={item.capa} alt="imagem do filme" className="card__image" />
             <div className="card__content">
                 <p className="text-justify">{item.descricao}</p>
             </div>
             <div className="card__info">
                 <div>310</div>
                 <div>link</div>

             </div>
         </div>
        );
      })}
    </div>
  );
}
