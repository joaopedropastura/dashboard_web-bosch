
const Sequelize = require('sequelize');
const database = require('../config/db');
const turma = require('./turma');
const informacoes = require('./informacoes');

const aluno = database.define('Aluno', {
    EDV: 
    {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },

    Nome: 
    {
        type: Sequelize.STRING(100),
        allowNull: false
    },

    Senha: 
    {
        type: Sequelize.STRING(15),
        allowNull: false
    }

});


aluno.belongsTo(turma, 
{
    constraint: true, 
    foreignKey: 'Turma_ID'
});

aluno.belongsTo(informacoes, 
{
    constraint: true, 
    foreignKey: 'Informacoes_ID'
});


module.exports = aluno;