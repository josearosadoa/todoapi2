const {Router} = require('express');
const { userLogin } = require('../controllers/auth.controllers');


const router = Router();

router.post('/auth/login', userLogin);


module.exports = router;