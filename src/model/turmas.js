const Sequelize = require('sequelize');
const database = require('../config/db');

const turma = database.define('Turma', {
    Turma_ID: 
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

    Instrutor_ID: 
    {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});


module.exports = turma;