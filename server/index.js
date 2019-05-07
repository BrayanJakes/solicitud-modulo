const express = require('express');
const app = express();

const { Mongoose } = require('./database/database');

//Inportaciones de rutas




//Settings

app.set('port', process.env.PORT || 3000);

//middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE, OPTIONS");
    next();
});

//rutas

app.use(require('./routes/usuario'));
app.use(require('./routes/login'));
app.use(require('./routes/tipo_solicitud'));
app.use(require('./routes/solicitud'));




//servidor activo
app.listen(app.get('port'), () => {
    console.log('Server en el puertoO', app.get('port'));
});