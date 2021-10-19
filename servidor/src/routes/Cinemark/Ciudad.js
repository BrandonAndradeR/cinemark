const express = require('express');
const router = express.Router();
const CiudadController = require('../../controllers/CinemarkController/CiudadController');


/*rutas para utilizar en postman API-servicios)*/ 
router.get('/api/listarCiudad', CiudadController.listarCiudadApi);



module.exports = router;