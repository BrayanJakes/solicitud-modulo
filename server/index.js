const express = require('express');
const path = require('path');
const app = express();







const { Mongoose } = require('./database/database');

//Inportaciones de rutas




//Settings

app.set('port', process.env.PORT || 3000);




//middlewares
app.use(express.static(__dirname + '/dist/facturacion'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });








//rutas
app.use(require('./routes/index'))
app.use(require('./routes/usuario'));
app.use(require('./routes/login'));
app.use(require('./routes/cliente'));
app.use(require('./routes/producto'));
app.use(require('./routes/factura'));


// static

app.get('*', function(req, res) {

    res.sendFile(path.join(__dirname + '/dist/facturacion/index.html'));
});



//servidor activo
app.listen(app.get('port'), () => {
    console.log('Server en el puertoO', app.get('port'));
});