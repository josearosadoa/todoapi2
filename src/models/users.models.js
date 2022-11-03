const db = require('../utils/database');

const {DataTypes} = require("sequelize");

const Users = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    usename: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type:DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: true,
        },
        allowNull: false,
    },
    create_at: {
        type:DataTypes.DATE,
        field: "created_At",
        allowNull: false,
    },
    updated_at: {
        type:DataTypes.DATE,
        field: "update_at",
        allowNull: false,
    },
});

module.exports = Users; 