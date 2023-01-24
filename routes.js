const express = require('express');
const route = express.Router();

// const multer = require("multer");
// const config = require('./src/config/multer');

const home = require('./src/controllers/home');

route.post('/index', home.index);
// const cadastro = require('./src/controllers/cadastro');


// route.get('/', home.pagInicialget);
// route.post('/', home.pagInicialPost);

// route.get('/cadastroTime', cadastro.time);
// route.post('/cadastroTime', cadastro.timeInsert);

// route.get('/editarTimes/:id', editar.time);
// route.post('/editarTimes/:id', editar.timeUpdate);

// route.get('/cadastroJogador', cadastro.jogador);
// route.post('/cadastroJogador', multer(config).single('foto'), cadastro.jogadorInsert);

// route.get('/editarJogadores/:id', editar.jogador);
// route.post('/editarJogadores/:id', multer(config).single('foto'), editar.jogadorUpdate);



module.exports = route;
