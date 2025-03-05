function adicionar() {
    let produtoSelecionado = document.querySelector('.produto-input').value;
    let nome = produtoSelecionado.split("-")[0].trimEnd();
    let valor = parseInt(produtoSelecionado.split("$")[1]);
    let quantidade = parseInt(document.getElementById('quantidade').value);

    let campoProdutos = document.querySelector('.carrinho__produtos');
    
    campoProdutos.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nome} <span class="texto-azul">R$${valor}</span>
        </section>`;
    
    let carrinho = document.querySelector('.carrinho__total');
    let total = parseInt(carrinho.textContent.split("$")[1]);
    console.log(total);
    total = total + valor * quantidade;
    carrinho.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$${total}</span>`;
}

function limpar() {
    document.querySelector('.carrinho__produtos').innerHTML = '';
    document.querySelector('.carrinho__total').innerHTML = 'Total: <span class="texto-azul" id="valor-total">R$0</span>';
}