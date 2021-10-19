const PeliculaModels = require('../../models/CinemarkModels/PeliculaModels')


async function listarPeliculaApi(req,res){
    const listaTodos_Pelicula = await PeliculaModels().listall();
    console.log(listaTodos_Pelicula);
    res.status(208).json({listaTodos_Pelicula});
}



module.exports = {
    listarPeliculaApi
}