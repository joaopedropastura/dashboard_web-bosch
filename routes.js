// Iniciando Route do Express
const express = require('express');

const route = express.Router();
const db = require('./src/config/db')

// Importando os Controllers
const cadastroGeral = require('./src/controllers/cadastro')
const home = require('./src/controllers/home')
const login = require('./src/controllers/check-login')

route.get('/', home.pagInicialget)
route.get('/cadastro', home.pagCadastro)

route.get('/login', home.pagLogin)
route.get('/avaliacao', home.pagAvaliacao)

route.post('/',home.pagInicialPost)
route.post('/login')
route.post('/cadastro-turma', cadastroGeral.turmaInsert)
route.post('/cadastro-user', cadastroGeral.userInsert)
route.post('/cadastro-aula', cadastroGeral.AulaInsert)

route.post('/cadastro-disciplina', cadastroGeral.DisciplinaInsert)
route.post('/cadastro-conteudo', cadastroGeral.ConteudoInsert)


route.post('/login', login.checkLogin)




module.exports = route;