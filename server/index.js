const express = require('express');
const exphbs = require('express-handlebars');
const cors = require('cors');
const path = require('path');
const app = express();




const { Mongoose } = require('./database/database');

//Inportaciones de rutas




//Settings

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
  }))
  app.set('view engine', '.hbs');



//middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'https://solicitu-desingweb.herokuapp.com');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });

app.use(cors({origin: 'https://solicitu-desingweb.herokuapp.com'}));


//rutas
app.use(require('./routes/index'))
app.use(require('./routes/usuario'));
app.use(require('./routes/login'));
app.use(require('./routes/tipo_solicitud'));
app.use(require('./routes/solicitud'));





//servidor activo
app.listen(app.get('port'), () => {
    console.log('Server en el puertoO', app.get('port'));
});