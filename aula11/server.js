// Importando o módulo Express e criando uma instância do aplicativo
const express = require('express');
const app = express();

// Importando as rotas do arquivo 'routes.js'
const routes = require('./routes');

// Importando o módulo 'path' para trabalhar com caminhos de arquivos
const path = require('path');

// Configurando o aplicativo para analisar dados do corpo da solicitação HTTP
app.use(express.urlencoded({ extended: true }));

// Configuração para servir arquivos estáticos na pasta 'public'
app.use(express.static(path.resolve(__dirname, 'public')));

// Configurando a pasta de visualização e o mecanismo de visualização EJS
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Usando as rotas importadas para manipular as solicitações do aplicativo
app.use(routes);

// Iniciando o servidor na porta 3000 e exibindo mensagens no console
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});