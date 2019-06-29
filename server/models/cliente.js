const mongose = require('mongoose');
const validator = require('mongoose-unique-validator');
const { Schema } = mongose;



const clienteSchema = new Schema({
    nombre: { type: String, required: [true, 'Nombre requerido'] },
    cedula: { type: String, unique: true, required: [true, 'Cedula requerido'] },
    edad: { type: Number },
    fechaCreacion: { type: Number },
    celular: { type: String, default: '0000-000-0000' },
    telefono: { type: String },
    direccion: { type: String },

});

clienteSchema.plugin(validator, { message: '{PATH} debe ser unico' });

module.exports = mongose.model('clientes', clienteSchema);