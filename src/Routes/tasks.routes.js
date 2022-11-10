const {Router} = require('express');
const {getAllTasks, getTaskById, getTaskWithUser, createdTask, completeTask, deleteTask} = require ("../controllers/tasks.controllers");


const router = Router();  

router.get('/tasks', getAllTasks);

router.get('/tasks/:userId', getTaskById);

router.get('/tasks/:id/users', getTaskWithUser);

router.post('/tasks/:id', createdTask);

//como enviar la informacion por el post
/*
  task: {idUser,title, description},
  categories: [1, 2, 3, 4, 5, 6, 7]
*/

router.patch('/tasks/:id', completeTask);

router.delete('/tasks', deleteTask);

module.exports = router;