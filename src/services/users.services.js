//importar el modelos donde estaremos haciendo la consulta

const Address = require('../models/adresses.models');
const Categories = require('../models/categories.models');
const TaskCategories = require('../models/taskcategories.models');
const Tasks = require('../models/tasks.models');
const Users = require('../models/users.models');

class UserServices {
    static async getAll(){       //attribute son las columnas de una tabla
        try {
            const result = await Users.findAll({attributes: ['id', 'username', 'email'],}); //equivalente select * from users;
            return result;
        } catch (error) {
            throw(error);
        }
    }

    static async getById(id){
        try {
            const result = await Users.findByPk(id, {attributes: ['id', 'username', 'email'],});
            return result;
        } catch (error) {
        throw error;
        }
    }

    static async getUserJoinAddress(id){
        try {
            const result = await Users.findOne({
                where: {id},
                attributes: ['id', 'username'], //de esta forma incluyo columnas
                include:  {
                    model: Address,
                    as: "home", 
                    attributes: {
                        exclude: ['id', 'user_id', 'userId'], // de esta forma excluyo columnas
                    }
                }
            });
            return result;
        } catch (error) {
            throw error; 
        }
    }
    static async getUserJoinTasks(id){
        try {
            const result = await Users.findOne({
                where: {id},
                attributes: ['username'],
                include: {
                    model: Tasks,
                    as: "todo",
                    attributes: ["title", "description", "is_complete"],
                    include: {
                        model: TaskCategories,
                        as: 'categories',
                        attributes: ["category_id"],
                        include: {
                            model: Categories,
                            as: 'categories',
                            attributes: [ "name"],
                        }
                    },
                },
            });
            return result;
        } catch (error) {
            throw error;
        }

        
    }
    static async add () {
        try {
            const result = await Users.create(newUser);
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async update (updateData, id){
        try {
            const result = await Users.update(updateData, {
                where: {id}
            });
            
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserServices;