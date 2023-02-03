// Iniciando Route do Express
const express = require('express');

const route = express.Router();
const db = require('./src/config/db')

// Importando os Controllers
const home = require('./src/controllers/home')
const login = require('./src/controllers/check-login')
const cadastroGeral = require('./src/controllers/cadastro')
const avaliacao = require('./src/controllers/avaliacao')
const dashBoard = require('./src/controllers/dashboard')

route.get('/', home.pagInicialget)
route.get('/cadastro', home.pagCadastro)

route.get('/login', home.pagLogin)
route.post('/login', login.checkLogin)

route.get('/profile', home.pagProfile)
route.get('/avaliacao', home.pagAvaliacao)
route.get('/prova-alunos', home.pagProvaAluno)
route.get('/lista-alunos', home.pagListaAlunos)

route.get('/dash-board/:edv', dashBoard.pagDashBoard)
route.get('/prova-alunos/:id/:edv', avaliacao.provaAlunosInfo)
route.post('/dash-board/:edv', dashBoard.pagDashBoard)

// route.post('/', home.pagInicialPost)
route.post('/cadastro-prova', avaliacao.provasInsert)
route.post('/lista-alunos', avaliacao.listaAlunosInfo)
route.post('/cadastro-user', cadastroGeral.userInsert)
route.post('/cadastro-aula', cadastroGeral.AulaInsert)
route.post('/cadastro-turma', cadastroGeral.turmaInsert)
route.post('/cadastro-conteudo', cadastroGeral.ConteudoInsert)
route.post('/cadastro-questao/:id/:edv', avaliacao.questoesInsert)
route.post('/cadastro-disciplina', cadastroGeral.DisciplinaInsert)


module.exports = route;