const {Router} = require('express');
const {getAllTasks, getTaskById, getTaskWithUser, createdTask, updateTask, deleteTask} = require ("../controllers/tasks.controllers");


const router = Router();  

router.get('/tasks', getAllTasks);

router.get('/tasks/:id', getTaskById);

router.get('/tasks/:id/users', getTaskWithUser);

router.post('/tasks', createdTask);

router.put('/tasks', updateTask);

router.delete('/tasks', deleteTask);

module.exports = router;