const express = require("express");
const f1Route = require('./src/routes/f1Route');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port= 3000;

// BodyParser
const bodyParser = require('body-parser');

// Configurar o BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configura o middleware 'express-ejs-layouts' para permitir o uso de layouts em páginas EJS
// Middleware é uma função ou conjunto de funções no Express (ou outros frameworks de servidor) que intercepta as requisições e respostas, permitindo executar lógica personalizada durante o processamento de uma requisição HTTP. Middleware pode modificar a requisição ou a resposta, processar dados, ou até mesmo encerrar o ciclo de requisição/resposta.
// Isso facilita a reutilização de partes comuns (como cabeçalho e rodapé) em várias páginas
app.use(expressLayouts);

// Define qual layout será utilizado como padrão para as views
// Aqui, o layout principal está localizado em './layouts/main', que será aplicado a todas as views que o utilizarem
app.set('layout', './layouts/main');

// Define o mecanismo de visualização da aplicação como 'EJS' (Embedded JavaScript), permitindo o uso de templates dinâmicos
// O 'EJS' permite injetar dados no HTML de maneira dinâmica, facilitando a criação de páginas dinâmicas
app.set('view engine', 'ejs');

// Especifica o diretório onde as views (arquivos EJS) estão localizadas
// As views estão dentro da pasta './src/views'
app.set('views', './src/views');

app.use(express.json());

app.use(express.static(`${__dirname}/src`))


app.use('/', f1Route);

app.listen(port, () => {
    console.log(`Servidor respondendo na porta ${port}`);
});