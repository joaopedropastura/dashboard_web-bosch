const Sequelize = require('sequelize');
const database = require('../config/db');
const disciplina = require('./disciplinas');
const aluno = require('./alunos');

const prova = database.define('Provas',
{
    Prova_ID:
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nome:
    {
        type: Sequelize.STRING(50),
        allowNull: false
    },

    Recuperacao:
    {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
});

prova.belongsTo(disciplina,
{
    constraint: true,
    foreignKey: 'Disciplina_ID'
});

prova.belongsTo(aluno,
{
    constraint: true,
    foreignKey: 'EDV'
});

module.exports = prova;