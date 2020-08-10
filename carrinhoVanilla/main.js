const produtos = [
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

const carrinhoItens = {
  'abc123': {
    id: 'abc123',
    nome: 'Vanilla para FW',
    preco: 300,
    descricao: 'O melhor site do mundo, segundo ele, o Sensacional. Pois a modéstia é seu forte!',
    imagem: 'https://lorempixel.com/490/300',
    quantidade: 1,
  },   
};

function renderizaProduto(produto, index) {
  console.log('produto ... ', produto)
  let retorno = `
  <div class="col-sm-4 mb-3">
  <div class="card">
      <div class="card loja__item">
        <img class="card-img-top" src="${produto.imagem}"  alt="lojinha">
        <div class="card-body">
          <h5 class="card-title">${produto['nome']}</h5>
          <small> ${produto.preco},00 </small>
          <p class="card-text">${produto.descricao}</p>
          <button data-index="${index}" href="#"  class="btn btn-primary btn-add">Adicionar</button>
        </div>
      </div>              
  </div>
  </div>`
  let retorno0 =`<div class="col-sm-4 mb-3">
  <div class="card">
      <div class="card loja__item">
        <img class="card-img-top" src="https://lorempixel.com/490/300"  alt="lojinha">
        <div class="card-body">
          <h5 class="card-title">`  + produto['nome'] +
          `</h5>
          <small> R$`+ produto['preco'] + `,00 </small>
          <p class="card-text">Segundo ele, o Misterioso, o melhor site do mundo. Pois a modéstia é seu forte!</p>
          <button href="#"  class="btn btn-primary">Adicionar</button>
        </div>
      </div>              
  </div>
  </div>`

  console.log(retorno0)
  return retorno; 
}

const renderizaProdutoMinima = () => {
  return produtos.map(renderizaProduto).join('')
}

function renderizaCarrinho () {
  let html = '';
  for (let produtoId in carrinhoItens) {
    html+= renderizaItemCarrinho(carrinhoItens[produtoId]);
  }
  document.querySelector('.carrinho__itens').innerHTML=html;
}

function renderizaItemCarrinho (produtoCarrinho) {
  return `
    <div class="card carrinho__item">
      <div class="card-body">
        <h5 class="card-title">${produtoCarrinho.nome}</h5>
        <p class="card-text"> Preço Unidade: R$${produtoCarrinho.preco},00 | Quantidade: ${produtoCarrinho.quantidade}</p>
        <p class="card-text"> Valor: R$${produtoCarrinho.preco * produtoCarrinho.quantidade},00</p>
        <button data-produto-id=${produtoCarrinho.id} class="btn btn-danger btn-sm btn-remove">Remover</button>                
      </div>
    </div>  
  `
}
function renderCarrinhoTotal(){
  let total = 0;
  for (let produtoId in carrinhoItens) {
    total+= (carrinhoItens[produtoId].preco * carrinhoItens[produtoId].quantidade);
  }
  document.querySelector('.carrinho__total')
    .innerHTML=`<h6>Total: <strong>R$${total},00</strong></h6>`
}



function adicionaItemNoCarrinho(produto) {
  if (!carrinhoItens[produto.id]) {
    carrinhoItens[produto.id] = produto;
    carrinhoItens[produto.id].quantidade = 0;
  }
  ++carrinhoItens[produto.id].quantidade
  renderizaCarrinho();  
  renderCarrinhoTotal();
}

document.body
  .addEventListener('click', function(event) {
    const elemento = event.target;
    if (elemento.classList.contains('btn-add')) {
      const index = parseInt(elemento.getAttribute('data-index'))
      const produto = produtos[index];
      adicionaItemNoCarrinho(produto)
    }

    if (elemento.classList.contains('btn-remove')) {
      const produtoId = elemento.getAttribute('data-produto-id');
      if (carrinhoItens[produtoId].quantidade <=1){
        delete carrinhoItens[produtoId];
      }else{
      --carrinhoItens[produtoId].quantidade;
      }
      renderizaCarrinho();
      renderCarrinhoTotal();
    }
  });

//document.querySelector('.loja').innerHTML=renderizaProdutosB();
document.querySelector('.loja').innerHTML=renderizaProdutoMinima();

renderizaCarrinho();
renderCarrinhoTotal();
