var express = require('express');
var router = express.Router();
var produtosController = require('../controllers/produtosController');

/* GET users listing. */
router.get("/",produtosController.produtos);
router.get("/camisetas", produtosController.camisetas);
router.get("/cadastrar", produtosController.cadastrar);
router.post("/cadastrar", produtosController.cadastrarProduto);

module.exports = router;
