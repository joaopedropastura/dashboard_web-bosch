// MYSQL JP

const sequelize = require('sequelize');

// const database = new sequelize('DashBoard', 'root', 'joaopedro',
// {
//     dialect: 'mysql', host:'localhost', port: 3306
// });

const database = new sequelize('DashBoard', 'root', 'Animais@1234',
{
    dialect: 'mysql', host:'localhost', port: 3306
});

database.sync();

database.authenticate()
    .then(function(){
        console.log("Conexão com o banco de dados realizada com sucesso!")
    }).catch(function(){
        console.log("Erro: Conexão com o banco de dados não foi realizada com sucesso!")
    })



module.exports = database;


//SQL SERVER

// const sequelize = require('sequelize');

// const database = new sequelize('DashBoard', 'user_dashboard', 'etsds10243110',
// {
//     // dialect: 'mssql', host:'localhost', port: 1433
//     dialect: 'mssql', host:'localhost', port: 49766   //KAIKY
// });

// database.authenticate()
//     .then(function(){
//         console.log("Conexão com o banco de dados realizada com sucesso!")
//     }).catch(function(){
//         console.log("Erro: Conexão com o banco de dados não foi realizada com sucesso!")
//     })

// database.sync();

// module.exports = database;