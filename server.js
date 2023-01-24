const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));


app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(routes);

app.listen(3000, () => console.log('Acesse: http://localhost:3000/'));
