// Controladores relacionados à rota da página inicial

// Função que renderiza a página inicial
exports.paginaInicial = (req, res) => {
    res.render('index'); // Renderiza a view 'index'
};

// Função que trata as solicitações POST da página inicial
exports.trataPost = (req, res) => {
    res.send('Sou a nova rota de POST.'); // Responde com uma mensagem para as solicitações POST
};