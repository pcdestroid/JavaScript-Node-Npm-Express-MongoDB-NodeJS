// Importando o módulo Express e criando um objeto Router
const express = require('express');
const route = express.Router();

// Importando os controladores para as rotas
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// Rota para a página inicial (método GET)
route.get('/', homeController.paginaInicial);

// Rota para lidar com dados do formulário da página inicial (método POST)
route.post('/', homeController.trataPost);

// Rota para a página de contato (método GET)
route.get('/contato', contatoController.paginaInicial);

// Exportando o objeto de roteamento para uso em outros lugares do aplicativo
module.exports = route;