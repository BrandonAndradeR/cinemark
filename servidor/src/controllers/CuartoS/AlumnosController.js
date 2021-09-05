const AlumnosModels = require('../../models/Electiva/AlumnosModels')


async function listarAlumnosApi(req,res){
    const listaTodos_Alumnos = await AlumnosModels().listall();
    console.log(listaTodos_Alumnos);
    res.status(208).json(listaTodos_Alumnos);
}

async function crearAlumnosApi(req,res){
    
    const datos = req.body;
    await AlumnosModels().createAlumnos(datos);
    res.status(208).json({
        success: 1,
        message:"creado con exito"
    });
}

async function eliminarAlumnosApi(req,res){
    const datos_id = req.params.idcatorce;
    await AlumnosModels().deleteAlumnos(datos_id);
    res.status(200).json({
        succes: 1,
        message: "eliminado con exito"
    })    
}

async function modificarAlumnosApi(req,res){

    const datos=[
        req.body.nombre,
        req.body.numero,
        req.params.idcatorce
    ]
    await AlumnosModels().createAlumnos(datos);
    res.status(200).json({
        succes:1,
        message:"modificado con exito"
    })
}

module.exports = {
    listarAlumnosApi,
    crearAlumnosApi,
    eliminarAlumnosApi,
    modificarAlumnosApi
}