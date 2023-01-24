
const Sequelize = require('sequelize');
const database = require('../config/db');

const informacoes = database.define('Informações', {
    Informacoes_ID: 
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    Email: 
    {
        type: Sequelize.STRING(50),
        allowNull: false
    },

    Telefone: 
    {
        type: Sequelize.STRING(20),
        allowNull: false
    },

    Skype: 
    {
        type: Sequelize.STRING(50),
        allowNull: false
    },

    GitHub: 
    {
        type: Sequelize.STRING(50),
        allowNull: false
    },

    Foto: 
    {
        type: Sequelize.STRING(50),
        allowNull: false
    }

});

module.exports = informacoes;