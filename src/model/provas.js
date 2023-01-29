const Sequelize = require('sequelize');
const database = require('../config/db');
const disciplina = require('./disciplinas');
const aluno = require('./alunos');

const provas = database.define('Provas',
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

provas.belongsTo(disciplina,
{
    constraint: true,
    foreignKey: 'Disciplina_ID'
});

provas.belongsTo(aluno,
{
    constraint: true,
    foreignKey: 'EDV'
});

provas.sync()

module.exports = provas;