const produtosLista = [
  {
    id: 'abc123',
    nome: 'Vanilla para FW',
    preco: 300,
    descricao: 'O melhor site do mundo, segundo ele, o Poblemático. Pois a modéstia é seu forte!',
    imagem: 'https://lorempixel.com/490/300'
  }, 
  {
    id: 'bbc123',
    nome: 'Vanilla para Node',
    preco: 1200,
    descricao: 'O melhor curso do mundo, segundo eu e os colegas. Saímos dele sabendo!',
    imagem: 'https://lorempixel.com/495/300'
  },   
  {
    id: 'cbc123',
    nome: 'Programação Funcional com JS',
    preco: 500,
    descricao: 'O melhor funcional de todos. Pois ele vem de anos de prática!',
    imagem: 'https://lorempixel.com/500/300'
  },   

]

const ProdutoComponent = (props) => {
  console.log('*** ProdutoComponent Neste ponto produto = ', props.item.id, props.onAddCarrinho)
  return (
    React.createElement('div',  { className: 'col-sm-4 mb-3' },
      React.createElement(CardLojaComponent, props),
    )    
  )
}

const ProdutoComponent0 = () => {
  return (
    React.createElement('div',  { className: 'col-sm-4 mb-3' },
      React.createElement('div',  { className: 'card loja__item' },
        React.createElement('img',  { className: 'card-img-top' , src:'https://lorempixel.com/490/300' },null),
        React.createElement('div',  { className: 'card-body' },
          React.createElement('h5',  { className: 'card-title' }, 'JS Raiz para FW'),
          React.createElement('small',  null , '300,00'),
          React.createElement('p',  { className: 'card-text' }, 'O melhor curso   do mundo!'),                    
          React.createElement('button',  { className: 'btn btn-primary' }, 'Adicionar')                    
        ) 
      )
    )    
  )
}

const ListaProdutosComponent = (props) => {
  
  return (
      React.createElement('div',  { className: 'row loja' },
        props.children
      // é o child ?
      /*    vai para o AppComponente como filhos 
        props.itens.map(function(produto) {
        return React.createElement(ProdutoComponent, {item: produto, 
          onAddCarrinho: props.onAddCarrinho})
      })
      */
    ) 
  )
}

const CardLojaComponent = (props) => {

  return (
    React.createElement(`div`,  { className: 'card loja__item' }, 
    React.createElement('img',  { className: 'card-img-top' , src: props.item.imagem },null),
    React.createElement('div',  { className: 'card-body' },
      React.createElement('h5',  { className: 'card-title' }, props.item.nome),
      React.createElement('small',  null , `R$${props.item.preco},00`),
      React.createElement('p',  { className: 'card-text' }, props.item.descricao),                    
      React.createElement('button',  { className: 'btn btn-primary' , onClick: 
      props.onAddCarrinho.bind(null, props.item)}, 'Adicionar')                    
    ) 
  )
  )
}

const CardCarrinhoComponent = (props) => {
  console.log('em CardCarrinhoComponent ', props)
  console.log('VENDO  ', Object.keys(props))
  return (
      Object.keys(props).map(function(produtoId, index) {
      //Object.values(props).map(function(produto) {

        console.log('No Map produtoId = ', produtoId)
        return(
          React.createElement(`div`,  { className: 'card carrinho__item' , key:`item-carrinho-${index}`} ,
            React.createElement('div',  { className: 'card-body' } ,
              React.createElement('h5',  { className: 'card-title' } ,props[produtoId].nome),
              //React.createElement('h5',  { className: 'card-title' } ,produto.nome),
              React.createElement( 'p',  { className: 'card-text' } ,
              `Preço Unidade: R$ ${props[produtoId].preco},00 | Quantidade: ${props[produtoId].quantidade}` ),
              React.createElement('p',  { className: 'card-text' } ,`Valor: R$
              ${props[produtoId].preco * props[produtoId].quantidade},00` ),
              React.createElement('button',  {  onClick: 
              props[produtoId].onRemoveCarrinho.bind(null, produtoId) , className: 'btn btn-danger btn-sm '} ,'Remover' )
              
            )
          )
        )    
      })
  )
}

function valorTotal(carrinhoItens) {

  return Object.keys(carrinhoItens).reduce(function(acc, produtoId) {
    return acc + carrinhoItens[produtoId].preco * carrinhoItens[produtoId].quantidade
  }, 0)

}

const CarrinhoComponent = (props) => {
    
  return (
    React.createElement('div',  { className: 'carrinho' }, 
      React.createElement('div',  { className: 'carrinho__itens' },
        React.createElement(CardCarrinhoComponent, props.itens)
      ),
      React.createElement('div',  { className: 'carrinho__total mt-2 p-3' }, 
        React.createElement('h6',  null ,  
        'Total : ',
        React.createElement('strong', null, `R$${valorTotal(props.itens)}`)

        )
      )
    )  
  )
}

function AppComponente () {
  const [ carrinhoItens, addItemCarrinho ] = React.useState({

    

  })

 
    console.log('carrinhoItens  --> ', carrinhoItens)
    
    function removeCarrinho (produtoId) {
      console.log('REMOVEVendo .....', produtoId)
    }
    function addCarrinho(produto) {
      console.log('*** addCarrinho produto', produto)
      if (!carrinhoItens[produto.id]) {
        addItemCarrinho ({
          ...carrinhoItens,
          [produto.id]: {
            ...produto,
            quantidade: 1,
            onRemoveCarrinho: removeCarrinho
          },
          
        })
      } else {
        addItemCarrinho ({
          ...carrinhoItens,
          [produto.id]: {
            ...produto,
            quantidade: carrinhoItens[produto.id].quantidade + 1,
            onRemoveCarrinho: removeCarrinho
          }
        })       
      }
    }

    return (
      React.createElement(React.Fragment,  null,
        React.createElement('div',  { className: 'col-sm-8' }, 
        React.createElement(ListaProdutosComponent, null,   /* ListaProdutosComponent foi definido acima o componente*/
          //* aqui vem os child que estava no ListaProdutosComponent
          produtosLista.map(function(produto, index) {
            return React.createElement(ProdutoComponent, {
              item: produto,
              onAddCarrinho: addCarrinho, 
              key:`produto-${index}`
            })
          })
        )
      ),
      React.createElement('div',  { className: 'col-sm-4' },
        React.createElement(CarrinhoComponent, { itens: carrinhoItens })
      )
    )
  )
}

ReactDOM.render(
    React.createElement(AppComponente),
    document.getElementById('app')
)

