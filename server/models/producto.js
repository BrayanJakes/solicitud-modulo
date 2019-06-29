const mongose = require('mongoose');
const { Schema } = mongose;



const productoSchema = new Schema({
    producto: { type: String, required: [true, 'Nombre requerido'] },
    monto: { type: Number },
    fechaCreacion: { type: Number },
    codigoProducto: { type: Number }

});


module.exports = mongose.model('productos', productoSchema);