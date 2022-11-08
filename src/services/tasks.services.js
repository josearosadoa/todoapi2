const { where } = require("sequelize");
const Tasks = require("../models/tasks.models");
const Users = require("../models/users.models");



class TaskServices {
    static async getAll(){
        try {
            const result = await Tasks.findAll({attributes: ['id', 'title', 'description', 'is_complete'],});
            return result;
        } catch (error) {
            throw(error);
        }
    }

static async getTaskId(id) {
    try {
        const result = await Tasks.findByPk(id, {attributes: ['title', 'description', 'is_complete'],});
        return result;
    } catch (error) {
        throw error;
    }
}

static async getTaskJoinUser(id){
    try {
        const result = await Tasks.findOne({
            where: {id},
            attributes: ['title', 'description', 'is_complete'],
            include: {
                model: Users,
                as: "author",
                attributes: {
                    exclude: ['password','createdAt','updatedAt'],
                }
            }
        });
        return result;
    } catch (error) {
        throw error;
    }
}

static async createdNewTask(newTask){
    try {
        const result = await Tasks.create(newTask);
        return result;
    } catch (error) {
        throw error;
    }
}

static async updateTaskNow(id, taskUpdate){
    try {
        const result = await Tasks.update(taskUpdate,{
            where: {id},
            
        });
        return result;
        }
    catch (error) {
        throw error;
    }
}

static async deleteTaskNow(id){
    try {
        const result = await Tasks.destroy({
            where: {id},
        });
        return result;
    } catch (error) {
        throw error;
    }
}

}
module.exports = TaskServices;