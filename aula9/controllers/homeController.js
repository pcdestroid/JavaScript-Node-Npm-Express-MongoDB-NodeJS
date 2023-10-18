exports.paginaInicial = (req, res) => {

    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="qualquercoisa"><br>
    Outro campo: <input type="text" name="aquioutrocampo"><br>
    <button>Olá mundo</button>
    </form>
    `);

};

exports.trataPost = (req, res) => {
    res.send('Sou a nova rota de POST.')
}