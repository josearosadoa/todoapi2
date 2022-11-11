const {Router} = require("express");
const {getAllusers, 
        getUserById, 
        getUserWithAddress, 
        getUserWithTasks, 
        createUser,
        updateUser,
    } = require("../controllers/users.controllers");

const router = Router();  //creamos una instancia de Router

//ruta para obtener todos los usuarios

router.get('/users', getAllusers);


router.get('/users/:id', getUserById);

router.get('/users/:id/address', getUserWithAddress);

router.get('/users/:id/tasks', getUserWithTasks);

router.post('/users', createUser);

router.put('/users/:id', updateUser);

module.exports = router;