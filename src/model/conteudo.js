
const Sequelize = require('sequelize');
const database = require('../config/db');
const turmas = require('./turmas');
const instrutores = require('./instrutores');
const disciplina = require('./disciplina');

const conteudo = database.define('Conteudos', 
{
    Conteudo_ID: 
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


conteudo.belongsTo(turmas, 
{
    constraint: true, 
    foreignKey: 'Turma_ID'
});

conteudo.belongsTo(instrutores, 
{
    constraint: true, 
    foreignKey: 'Instrutor_ID'
});

conteudo.belongsTo(disciplinas, 
{
    constraint: true, 
    foreignKey: 'Disciplina_ID'
});

module.exports = conteudo;