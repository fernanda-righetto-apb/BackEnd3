//criando um servidor web usando o Node JS

const http = require('http');

const server = http.createServer((req,res) => {
    console.log("Efetuado o pedido");
    //coloca ro que quero, do jeito que eu quero - setHeader
    res.setHeader('Content-type', 'text/html')
    res.write("<h1>Pedido Aceito1</h1>");
    res.write("<h2>Pedido Aceito2</h2>");
    res.write("<h3>Pedido Aceito3</h3>");
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('Servidor iniciado');
});