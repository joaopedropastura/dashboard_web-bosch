
const Sequelize = require('sequelize');
const database = require('../config/db');
const turmas = require('./turma');
const instrutores = require('./instrutores');
const conteudos = require('./conteudos');

const disciplinas = database.define('Disciplinas', 
{
    Disciplinas_ID: 
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    Nome: 
    {
        type: Sequelize.STRING(100),
        allowNull: false
    }

});


disciplinas.belongsTo(turmas, 
{
    constraint: true, 
    foreignKey: 'Turma_ID'
});

disciplinas.belongsTo(instrutores, 
{
    constraint: true, 
    foreignKey: 'Instrutores_ID'
});

disciplinas.belongsTo(conteudos, 
{
    constraint: true, 
    foreignKey: 'Conteudos_ID'
});

module.exports = disciplinas;