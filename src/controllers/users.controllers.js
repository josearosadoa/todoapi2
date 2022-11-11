// controlador para obtener todos los usuarios
const UserServices = require('../services/users.services');



const getAllusers = async (req, res, next) => {
   try {
       const result = await UserServices.getAll();
       res.status(200).json(result);
    
   } catch (error) {
    next(error);
   }
   
};

const getUserById = async (req, res, next) => {
   try {
    const {id} = req.params;
    const result = await UserServices.getById(id);
    res.status(200).json(result);
   } catch (error) {
    next(error);
   }
};

const getUserWithAddress = async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await UserServices.getUserJoinAddress(id);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const getUserWithTasks = async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await UserServices.getUserJoinTasks(id);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const createUser = async(req, res, next) => {
    try {
        const newUser = req.body;
        const result = await UserServices.add(newUser);
        res.status(201).json(result);
    } catch (error) {

        next({
            status: 418, 
            errorContent: error, 
            message: 'revisa bien lo que envias',
        });
        
    }


}
 const updateUser = async (req, res, next) => {
    try {
        const {id} = req.params;
        const updateData = req.body;
        const result = await UserServices.update(updateData, id);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
 }
module.exports = {
    getAllusers,
    getUserById,
    getUserWithAddress,
    getUserWithTasks,
    createUser,
    updateUser,
};