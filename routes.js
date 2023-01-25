// Iniciando Route do Express
const express = require('express');
const multer = require("multer");

const route = express.Router();


// Importando os Controllers
const home = require('./src/controllers/home');
// Recebendo arquivo do multer que criamos
const config = require('./src/config/multer');
// Cadastro de aluno irá receber um arquivo com o "name" do HTML chamado de "foto"

const cadastro = require('./src/controllers/cadastro');
const editar  =  require('./src/controllers/editar');
// Iniciando as rotas
route.get('/', home.pagInicialGet);
route.get('/alunos', home.pagAlunos);
route.get('/sala', home.PagSala);

route.post('/alunos', multer(config).single('foto'), cadastro.alunoInsert);
route.post('/alunos', cadastro.alunoInsert);
route.post('/salas', cadastro.salaInsert);
route.post('/', home.pagInicialPost);
route.post('/editarAluno/:id', multer(config).single('foto'), editar.adicionar);

// route.get('/alunos', cadastro.sala);

module.exports = route;