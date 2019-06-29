const mongose = require('mongoose');
const { Schema } = mongose;



const facturacionSchema = new Schema({
    cliente: { type: String },
    cedula: { type: String },
    productos: { type: [{}] },
    subtotal: { type: Number },
    iva: { type: Number },
    totalmonto: { type: Number },
    fechaCreacion: { type: Number },
    codigoFactura: { type: Number }

});


module.exports = mongose.model('facturaciones', facturacionSchema);