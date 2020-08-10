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
  console.log('*** ProdutoComponent Neste ponto produto = ', props.produto, props.onAddCarrinho)
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
  console.log('as props que devo repassar ', props)
  return (
      React.createElement('div',  { className: 'row loja' },
     
        props.itens.map(function(produto) {
        return React.createElement(ProdutoComponent, {produto: produto, onAddCarrinho: props.onAddCarrinho})
      })
    ) 

    
  )
}


const CardLojaComponent = (props) => {
console.log('veio veio veio ', props)
  console.log('este é ', props.produto.nome)
  return (
    React.createElement('div',  { className: 'card loja__item' }, 
    React.createElement('img',  { className: 'card-img-top' , src: props.produto.imagem },null),
    React.createElement('div',  { className: 'card-body' },
      React.createElement('h5',  { className: 'card-title' }, props.produto.nome),
      React.createElement('small',  null , `R$${props.produto.preco},00`),
      React.createElement('p',  { className: 'card-text' }, props.produto.descricao),                    
      React.createElement('button',  { className: 'btn btn-primary' , onClick: props.onAddCarrinho }, 'Adicionar')                    
    ) 
  )
  )
}

const CardCarrinhoComponent = (props) => {
  console.log('em CardCarrinhoComponent ', props)
  console.log('VENDO  ', Object.keys(props))
  return (
      Object.keys(props).map(function(produtoId) {
      //Object.values(props).map(function(produto) {
        return(
          React.createElement('div',  { className: 'card carrinho__item' } ,
            React.createElement('div',  { className: 'card-body' } ,
              React.createElement('h5',  { className: 'card-title' } ,props[produtoId].nome),
              //React.createElement('h5',  { className: 'card-title' } ,produto.nome),
              React.createElement( 'p',  { className: 'card-text' } ,
              `Preço Unidade: R$ ${props[produtoId].preco},00 | Quantidade: ${props[produtoId].quantidade}` ),
              React.createElement('p',  { className: 'card-text' } ,`Valor: R$
              ${props[produtoId].preco * props[produtoId].quantidade},00` ),
              React.createElement('button',  { className: 'btn btn-danger btn-sm btn-remove' } ,'Remover' )
            )
          )
        )    
      })
  )
}



const CarrinhoComponent = (carrinhoItens) => {

  function valorTotal(xitens) {
    console.log('TOTEM ', xitens)
  
    return Object.keys(xitens).reduce(function(acc, produtoId) {
      return acc + xitens[produtoId].preco * xitens[produtoId].quantidade
    }, 0)
  
  }
  console.log('*** CarrinhoComponent dados na entrada:', carrinhoItens )

  console.log(Object.keys(carrinhoItens.xitens))
  console.log(Object.values(carrinhoItens.xitens))
  return (
    React.createElement('div',  { className: 'carrinho' }, 
      React.createElement('div',  { className: 'carrinho__itens' },
        React.createElement(CardCarrinhoComponent, carrinhoItens.xitens)
      ),

      React.createElement('div',  { className: 'carrinho__total mt-2 p-3' }, 
        React.createElement('h6',  null ,  
        'Total : ',
        React.createElement('strong', null, `R$${valorTotal(carrinhoItens.xitens)}`)

        )
      )
    )  
  )

}

function AppComponente () {
    const carrinhoItens = {
      'abc123':  {
        id: 'abc123',
        nome: 'Vanilla para FW',
        preco: 300,
        descricao: 'O melhor site do mundo, segundo ele, o Poblemático. Pois a modéstia é seu forte!',
        imagem: 'https://lorempixel.com/490/300',
        quantidade: 1
      }, 
      'bbc123': {
        id: 'bbc123',
        nome: 'Vanilla para Node',
        preco: 1200,
        descricao: 'O melhor curso do mundo, segundo eu e os colegas. Saímos dele sabendo!',
        imagem: 'https://lorempixel.com/495/300',
        quantidade: 2
      }
    }

    console.log('carrinhoItens  --> ', carrinhoItens)

    function addCarrinho() {
      console.log('oi produto')
    }

    return (
      React.createElement(React.Fragment,  null,
        React.createElement('div',  { className: 'col-sm-8' }, 
        React.createElement(ListaProdutosComponent, { itens: produtosLista,
          onAddCarrinho: addCarrinho }),   /* ListaProdutosComponent foi definido acima o componente*/
      ),
      React.createElement('div',  { className: 'col-sm-4' },
        React.createElement(CarrinhoComponent, { xitens: carrinhoItens })
      )
    )
  )
}


ReactDOM.render(
    React.createElement(AppComponente),
    document.getElementById('app')
)