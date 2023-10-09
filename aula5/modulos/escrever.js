const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w' }); //Criar arquivo
};


// fs.writeFile(caminhoArquivo, 'Frase 1\n', { flag: 'a', encoding: 'utf8' }); //Criar arquivo
// // flag = w  apagar tudo que está no arquivo e escrever novamente.
// // flag = a  inserir novos textos 