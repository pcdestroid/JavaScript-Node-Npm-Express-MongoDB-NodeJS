const multiplicacao = require('./modulos/mod1');
const path = require('path');

console.log(multiplicacao(2, 2));

console.log(__filename);
console.log(__dirname);

console.log(path.resolve(__dirname, '..', '..'));