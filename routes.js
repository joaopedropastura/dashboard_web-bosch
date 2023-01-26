// Iniciando Route do Express
const express = require('express');

const route = express.Router();
const db = require('./src/config/db')

// Importando os Controllers
const cadastroGeral = require('./src/controllers/cadastro')
const home = require('./src/controllers/home')


route.get('/', home.pagInicialget)
route.get('/cadastro', home.pagCadastro)
route.get('/login', home.pagLogin)

route.post('/',home.pagInicialPost)
route.post('/cadastro', cadastroGeral.ConteudoInsert)

// route.get('/alunos', cadastro.sala);

module.exports = route;