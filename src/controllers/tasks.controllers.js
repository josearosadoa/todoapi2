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

const getTaskById = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await TaskServices.getTaskId(id);
        res.status(200).json(result);
        } catch (error) {
        console.log(error);
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

const createdTask = async (req, res) => {
    try {
        const {title, description, is_complete, userId} = req.body;
        const newTask = {title, description, is_complete, userId};
        const result = await TaskServices.createdNewTask(newTask);
        res.status(201).json(result);
    
    } catch (error) {
        console.log(error);
    }

};

const updateTask = async (req, res) => {
    try {
        const {id, title, description, is_complete, userId} = req.body;
        const taskUpdate = {id, title, description, is_complete, userId};
        const result = await TaskServices.updateTaskNow(id, taskUpdate);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
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
    updateTask,
    deleteTask,
};