/*jshint esversion: 6 */
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);


const URI = 'mongodb://admin:3mcOB6fZ9KbfNtsM@SG-facturacion-22709.servers.mongodirector.com:49003,SG-facturacion-22710.servers.mongodirector.com:49003,SG-facturacion-22711.servers.mongodirector.com:49003/admin?replicaSet=RS-facturacion-0&ssl=true';

// const URI = 'mongodb://admin:xuZ5bth0edz16STN@SG-sefired-20871.servers.mongodirector.com:48438,SG-sefired-20872.servers.mongodirector.com:48438,SG-sefired-20873.servers.mongodirector.com:48438/admin?replicaSet=RS-sefired-0&ssl=true'



// mongodb://localhost:27017/facturacion
// mongodb://admin:3mcOB6fZ9KbfNtsM@SG-facturacion-22709.servers.mongodirector.com:49003,SG-facturacion-22710.servers.mongodirector.com:49003,SG-facturacion-22711.servers.mongodirector.com:49003/admin?replicaSet=RS-facturacion-0&ssl=true
mongoose.connect(URI, { useNewUrlParser: true })
    .then(() => {
        console.log('DB Conectado');
    })
    .catch(err => {
        console.log(err);
    });

module.exports = mongoose;