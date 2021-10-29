const { Router } = require('express');
const router = Router();

const{ getUsers } = require ('../controllers/conexion_db')

router.get('/users', getUsers);



module.exports = router;