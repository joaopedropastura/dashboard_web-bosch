const Sequelize = require('sequelize');
const database = require('../config/db');
const turmas = require('./turmas');
const informacoes = require('./informacoes');

const alunos = database.define('Alunos', 
{
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

alunos.belongsTo(turmas, 
{
    constraint: true, 
    foreignKey: 'Turma_ID'
});

alunos.belongsTo(informacoes, 
{
    constraint: true, 
    foreignKey: 'Informacoes_ID'
});


module.exports = alunos;