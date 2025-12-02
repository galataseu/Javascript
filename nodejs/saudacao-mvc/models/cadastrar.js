module.exports = {
  cadastroMensagem: (id, descricao, quantidade, preco) => {
    return `Produto cadastrado com sucesso! Id: ${id}, 
    Descrição: ${descricao}, Quantidade: ${quantidade}, Preço: R$${preco}.`;
  }
};