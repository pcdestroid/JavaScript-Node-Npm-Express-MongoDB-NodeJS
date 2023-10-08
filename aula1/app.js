
// Node - Módulos 
const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');

// const p1 = new Pessoa('Alan');
// console.log(p1)


// link utilizado para testes
axios('http://destiny.trade/JSON/sortieRewards_f.json')
    .then(response => {
        let dados = response.data
        console.log(dados)
    })
    .catch(e => console.log(e))


// // const mod1 = require('./mod1');
// const { nome, sobrenome, falaNome } = require('./mod1');

// console.log(nome)
// console.log(sobrenome)
// console.log(falaNome())