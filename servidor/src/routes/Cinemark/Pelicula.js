const express = require('express');
const router = express.Router();
const PeliculaController = require('../../controllers/CinemarkController/PeliculaController');


/*rutas para utilizar en postman API-servicios)*/ 
router.get('/api/listarPelicula', PeliculaController.listarPeliculaApi);



module.exports = router;