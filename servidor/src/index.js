const express = require('express');
const morgan = require('morgan');
const path = require('path');

//inicio
const app = express();

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
app.use(require('./routes'));


//rutanuevaComplementaria
app.use('/formacion', require('./routes/Electiva/cuartoSemestre'));


//public
app.use(express.static(path.join(__dirname,'public')));

//inicia el server
app.listen(app.get('port'),()=>{
    console.log('server on port', app.get('port'));
});