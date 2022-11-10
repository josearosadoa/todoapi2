const Tasks = require('../models/tasks.models');
const TaskServices = require('../services/tasks.services');



const getAllTasks = async (req, res) => {
    try {
        const result = await TaskServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
};

const getTaskById = async (req, res, next ) => {
    try {
        const {userId} = req.params;
        const result = await TaskServices.getTaskId(userId);
        res.status(200).json(result);
        } catch (error) {
        next({
            message: 'no se pudieron obtener las tareas',
            status: 400,
            errorContent: error,
        });
    }
};

const getTaskWithUser = async (req, res) => {
    try {
        const {id} = req.params; 
        const result = await TaskServices.getTaskJoinUser(id);
        res.status(200).json(result);
    } catch (error) {
       console.log(error); 
    }

};

const createdTask = async (req, res, next) => {
    try {
        const {task, categories} = req.body;
        const result = await TaskServices.createdNewTask(task, categories);
        res.status(201).json({message: 'La tarea fue creada'});
    
    } catch (error) {
        next({
            message:'Algo salio mal',
            status: 400,
            errorContent: error,
        });
    }

};

const completeTask = async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await TaskServices.updateStatus(id);
        res.status(200).json({message: "Tarea actualizada"});
    } catch (error) {
        next({
            message: "No se ha podido actualizar la tarea",
            status: 400,
            error: error,
        });
    }
};

const deleteTask = async (req, res) => {
    try {
        const {id} = req.body;
        const result = await TaskServices.deleteTaskNow(id);
        res.status(204).json(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = { 
    getAllTasks,
    getTaskById,
    getTaskWithUser,
    createdTask,
    completeTask,
    deleteTask,
};