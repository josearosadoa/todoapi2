const db = require('../utils/database');
const bcrypt = require('bcrypt');

const {DataTypes} = require("sequelize");
const { use } = require('../Routes/users.route');

const Users = db.define('users', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true,
        },
        allowNull: false,
      },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
     
},{
    hooks: {
        beforeCreate: (user, options) => {
            const {password} = user;
            const hash = bcrypt.hashSync(password, 8); //este metodo devuelve un hash de la password
            user.password = hash;
        }
    }
});

module.exports = Users; 