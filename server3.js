// criando um sistema de rotas e status code

const http = require('http');
const fs = require('fs');
let porta = 3000;
let host = 'localhost';

const server = http.createServer((req,res) => {
     //header
     res.setHeader('Content-Type', 'text/html');
    //rotas
    //variável gurda a rota que quero chamar
    let html_pag = '';

    switch(req.url){
        case '/':
            html_pag = "home.html";
            res.statusCode = 200;
            break;
        case '/home':
            html_pag = "home.html";
            res.statusCode = 200;
            break;
        case '/servicos':
            html_pag = "servicos.html";
            res.statusCode = 200;
            break;
        case '/contato':
            html_pag = 'contato.html';
            res.statusCode = 200;
            break;
        default:
            html_pag = '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile('./html/' + html_pag, (erro,data) => {
        if(erro){
            console.log(erro);
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    });

})


server.listen(porta, host, () => {
    console.log('Servidor iniciado!');
})


//código do status do serviço requisitado - status code
// //http - conexão cliente-servidor => request-response
// mais comuns de status code:
// 200 - tudo ocorreu certo 
// 301 - o recurso está disponível mas mudou de local 
// 404 - o recurso não foi encontrado o servidor
// 500 - ocorreu um erro no servidor
// //Blocos do status code
// 100 - respostas informativas
// 200 - códigos de status de sucesso
// 300 - redirecionamentos
// 400 - erros de cliente ou utilizador (recurso não encontrado)
// 500 - erros internos de servidor