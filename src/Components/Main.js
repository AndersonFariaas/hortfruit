import React from "react";
import Cards from "./Cards";

export default function Main(){

    return(
        <>
            <p className="titulo-cards">Nossos Produtos</p>
            <Cards />

            <div className="Carrinho">
                <div className="Carrinho-centro">Arraste o seu produto até aqui para colocar no carrinho</div>
                    
                <div className="Botoes-carrinho">
                    <button>+</button>
                    <button>-</button>
                </div>  
            </div>
        </>
    )
}