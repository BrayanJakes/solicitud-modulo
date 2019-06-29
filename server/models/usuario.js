const mongose = require('mongoose');
const validator = require('mongoose-unique-validator');
const { Schema } = mongose;

const roles = {
    values: ['Administrador', 'Cliente'],
    message: '{VALUE} no es un rol permitido'
};

const usuarioSchema = new Schema({
    nombre: { type: String, required: [true, 'Nombre requerido'] },
    cedula: { type: String, unique: true, required: [true, 'Cedula requerido'] },
    edad: { type: Number },
    password: { type: String, required: [true, 'Contraseña requerido'] },
    email: { type: String, unique: true, required: [true, 'Email requerido'] },
    role: { type: String, required: true, default: 'Cliente', enum: roles },
    fechaCreacion: { type: Date },
    celular: { type: String },
    telefono: { type: String },
    direccion: { type: String },
    image: { type: String }
});

usuarioSchema.plugin(validator, { message: '{PATH} debe ser unico' });

module.exports = mongose.model('usuarios', usuarioSchema);