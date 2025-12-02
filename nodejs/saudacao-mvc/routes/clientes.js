const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.get('/', clienteController.clientes);
router.get('/login', clienteController.login);
router.post('/confirmacao', clienteController.confirmacao);

module.exports = router;
