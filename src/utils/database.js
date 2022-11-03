// gestionar la conexion a la base de datos
// sequelize.init ----- configuraciones

const { Sequelize } = require("sequelize");


const db = new Sequelize({
    database: 'todo',
    username: 'postgres',
    host: 'localhost',
    port: '5432',
    password: 'ROOT',
    dialect: 'postgres',
});


module.exports = db;