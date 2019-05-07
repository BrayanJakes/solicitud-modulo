const express = require('express');
const app = express();
const cors = require('cors');

const { Mongoose } = require('./database/database');

//Inportaciones de rutas




//Settings

app.set('port', process.env.PORT || 3000);

//middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

//rutas

app.use(require('./routes/usuario'));
app.use(require('./routes/login'));
app.use(require('./routes/tipo_solicitud'));
app.use(require('./routes/solicitud'));




//servidor activo
app.listen(app.get('port'), () => {
    console.log('Server en el puertoO', app.get('port'));
});