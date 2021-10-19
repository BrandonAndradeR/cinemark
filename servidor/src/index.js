const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

//inicio
const app = express();
app.use(cors());

//configuraciones
app.set('port', process.env.PORT || 4000);


//peticiones
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//variables globales
app.use((req,res,next)=>{
    next();
});

//rutas
app.use(require('./routes/Cinemark/Ciudad'));


//rutanuevaComplementaria
//app.use('/formacion', require('./routes/Electiva/cuartoSemestre'));

//rutaCinemark
app.use('/CinemarkCiudad', require('./routes/Cinemark/Ciudad'));
app.use('/CinemarkPelicula', require('./routes/Cinemark/Pelicula'));

//public
app.use(express.static(path.join(__dirname,'public')));

//inicia el server
app.listen(app.get('port'),()=>{
    console.log('server on port', app.get('port'));
});