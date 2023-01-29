const Sequelize = require('sequelize');
const database = require('../config/db');
const turmas = require('./turmas');
const instrutores = require('./instrutores');
const disciplinas = require('./disciplinas');
const conteudos = require('./conteudos');

const aula = database.define('Aulas',
{
    Aula_ID:
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    Carga_Horaria:
    {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    Data_Inicio:
    {
        type: Sequelize.DATEONLY,
        allowNull: false
    },

    Data_Fim:
    {
        type: Sequelize.DATEONLY,
        allowNull: false
    }

});

aula.belongsTo(turmas,
{
    constraint: true,
    foreignKey: 'Turma_ID'
});

aula.belongsTo(instrutores,
{
    constraint: true,
    foreignKey: 'EDV'
});

aula.belongsTo(disciplinas,
{
    constraint: true,
    foreignKey: 'Disciplina_ID'
});

aula.belongsTo(conteudos,
    {
        constraint: true,
        foreignKey: 'Conteudo_ID'
    });

module.exports = aula;