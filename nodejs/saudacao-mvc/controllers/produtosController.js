const cadastrar = require("../models/cadastrar");

module.exports = {

    produtos: (req, res) => {
        res.sendfile('produtos.html', { root: 'views' });  
    },

    camisetas: (req, res) => {
        res.sendfile('camisetas.html', { root: 'views' });
    },

    cadastrar: (req, res) => {
        res.sendfile('cadastrar.html', { root: 'views' });
    },

    cadastrarProduto: (req, res) => {
        const { id, descricao, quantidade, preco} = req.body;
        const mensagemProdutos = cadastrar.cadastroMensagem(id, descricao, quantidade, preco);
        res.send(`<h1>${mensagemProdutos}</h1>`);
    }
};