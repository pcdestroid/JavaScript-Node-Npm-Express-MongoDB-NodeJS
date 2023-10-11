const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar Ok</button>
    </form>
    `);
});

//http://localhost:3000/testes/123/123?nome=alan&sobrenome=francis&idade=30

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.idUsuarios);
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`O que vc enviou foi: ${req.body.nome}`);
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});