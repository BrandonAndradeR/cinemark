const express = require('express');
const router = express.Router();
const AlumnosController = require('../../controllers/CuartoS/AlumnosController');


/*rutas para utilizar en postman API-servicios)*/ 
router.get('/api/listarAlumnos', AlumnosController.listarAlumnosApi);
router.post('/api/CrearAlumnos', AlumnosController.crearAlumnosApi);
router.delete('/api/eliminarAlumnos/:idcatorce', AlumnosController.eliminarAlumnosApi);
router.put('/api/modificarAlumnos/:idcatorce', AlumnosController.modificarAlumnosApi);


module.exports = router;