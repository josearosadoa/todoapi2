const { where } = require("sequelize");
const Categories = require("../models/categories.models");
const TaskCategories = require("../models/taskcategories.models");
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

static async getTaskId(userId) {
    try {
        const result = await Tasks.findAll({
            where: {userId},
            attributes: ['id', 'title', 'description', 'is_complete'],
            include : {
                model: TaskCategories,
                as: 'categories',
                attributes: ['category_id'],
                include: {
                    model: Categories,
                    as: 'categories',
                    attributes: ['name']
                },
            },
        
        });
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

static async createdNewTask(task, categories){
    try {
        const TaskResult = await Tasks.create(task);
        //cuando se crea la tarea se devuelve un objeto {}
        const {id} = TaskResult;
        categories.forEach( 
            async (category) => 
            await TaskCategories.create({categoryId: category, taskId: id })
            );
            return TaskResult;
    } catch (error) {
        throw error;
    }
}

static async updateStatus(id){
    try {
        const result = await Tasks.update(
            {isComplete: true},{
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