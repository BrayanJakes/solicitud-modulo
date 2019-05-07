/*jshint esversion: 6 */
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);


const URI = 'mongodb://localhost:27017/sefired';


mongoose.connect(URI, {useNewUrlParser: true})
    .then(()=>{
        console.log('DB Conectado');
    })
    .catch(err => {
        console.log(err);
    });

module.exports = mongoose;