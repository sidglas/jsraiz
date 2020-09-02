import React from 'react'
import produtosListe  from './data'
import ProdutoComponent from './Components/Produto'
import ListaProdutosComponentt from './Components/ListaProdutos'
import CarrinhoComponent from './Components/Carrinho'


export default function AppComponent () {
    const [ carrinhoItens, addItemCarrinho ] = React.useState({  })
  
      console.log('carrinhoItens  --> ', carrinhoItens)
      
  
      function addCarrinho(produto) {
        console.log('*** addCarrinho produto', produto)
        if (!carrinhoItens[produto.id]) {
          addItemCarrinho ({
            ...carrinhoItens,
            [produto.id]: {
              ...produto,
              quantidade: 1,
            },
            
          })
        } else {
          addItemCarrinho ({
            ...carrinhoItens,
            [produto.id]: {
              ...produto,
              quantidade: carrinhoItens[produto.id].quantidade + 1,
            }
          })       
        }
      }
  
      function removeItemCarrinho (produtoId) {
        console.log('Removendo item .....', produtoId)
        console.log(carrinhoItens[produtoId].quantidade)
        if (carrinhoItens[produtoId].quantidade > 1)   {
          addItemCarrinho({
              ...carrinhoItens,
              [produtoId]: {
                ...carrinhoItens[produtoId],
                quantidade: carrinhoItens[produtoId].quantidade - 1,
              }
          })
        } else {
          delete carrinhoItens[produtoId]
          addItemCarrinho({ ...carrinhoItens})
          console.log('estou aqui o que é que é?')
        }
      }
  
  
      return (
        <React.Fragment>
          <div className="col-sm-8"> 
            <ListaProdutosComponentt>
              {
                produtosListe.map((produto, index) => 
                
                  (<ProdutoComponent 
                    item={produto} 
                    onAddCarrinho={addCarrinho} 
                    key={`produto-${index}`} 
                  />) 
                
                )
              }
            </ListaProdutosComponentt>
          </div> 
          <div className="col-sm-4">   
            <CarrinhoComponent itens={carrinhoItens} onRemoveItemCarrinho={removeItemCarrinho}/> 
          </div>  
        </React.Fragment>
      )
  }
