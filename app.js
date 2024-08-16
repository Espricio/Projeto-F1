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

app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.json());

app.use(express.static(`${__dirname}/src`))


app.use('/', f1Route);

app.listen(port, () => {
    console.log(`Servidor respondendo na porta ${port}`);
});