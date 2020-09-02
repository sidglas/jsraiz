import React from 'react'

import CardLojaComponent from './CardLoja';

export default function ProdutoComponent  (props)  {

   console.log('*** ProdutoComponent Neste ponto produto = ', props.item.id, props.onAddCarrinho)
   return (
  
         <div className="col-sm-4 mb-3">
         <CardLojaComponent {...props} />
         </div>
   
   )
}