const Sequelize = require('sequelize');
const database = require('../config/db');
const turmas = require('./turmas');

const calendario = database.define('Calendario',
{
    Calendario_ID:
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    Data:
    {
        type: Sequelize.DATEONLY,
        allowNull: false
    },

    Tarefa:
    {
        type: Sequelize.STRING(100),
        allowNull: false
    }

});

calendario.belongsTo(turmas,
{
    constraint: true,
    foreignKey: 'Turma_ID'
});

module.exports = calendario;