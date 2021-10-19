const CiudadModels = require('../../models/CinemarkModels/CiudadModels')


async function listarCiudadApi(req,res){
    const listaTodos_Ciudad = await CiudadModels().listall();
    console.log(listaTodos_Ciudad);
    res.status(208).json({listaTodos_Ciudad});
}



module.exports = {
    listarCiudadApi
}