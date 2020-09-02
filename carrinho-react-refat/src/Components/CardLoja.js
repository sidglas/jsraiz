import React from 'react'
export default function CardLojaComponent (props)  {

   
   return (
   <div className="card loja__item">
   <img className="card-img-top" src={props.item.imagem} />
   <div className="card-body">
      <h5 className="card-title"> {props.item.nome} </h5>
      <small> {`R$${props.item.preco},00`} </small>
      <p className="card-text">{props.item.descricao}</p>
      <button className="btn btn-primary" onClick={props.onAddCarrinho.bind(null, props.item)}>Adicionar
      </button>
   </div>
   </div>
   )
}
