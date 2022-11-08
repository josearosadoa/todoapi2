const {Router} = require("express");
const {getAllusers, getUserById, getUserWithAddress, getUserWithTasks} = require("../controllers/users.controllers");

const router = Router();  //creamos una instancia de Router

//ruta para obtener todos los usuarios

router.get('/users', getAllusers);


router.get('/users/:id', getUserById);

router.get('/users/:id/address', getUserWithAddress);

router.get('/users/:id/tasks', getUserWithTasks);

module.exports = router;