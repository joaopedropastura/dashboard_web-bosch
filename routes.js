// Iniciando Route do Express
const express = require('express');

const route = express.Router();
const db = require('./src/config/db')

// Importando os Controllers
const home = require('./src/controllers/home')


route.get('/', home.pagInicialget)
route.post('/',home.pagInicialPost)

// route.get('/alunos', cadastro.sala);

module.exports = route;