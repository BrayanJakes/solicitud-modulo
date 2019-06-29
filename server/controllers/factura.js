const crud = require('../config/crudmongo');
const facturacion_model = require('../models/facturacion');

const ctrl = {};

const Crud = new crud();

ctrl.listar = async(req, res) => {



    let listado = await facturacion_model.find().sort({ fechaCreacion: -1 })

    await facturacion_model.countDocuments({}, (err, count) => {
        if (err) {
            return res.json({
                ok: false,
                err
            })
        }

        return res.json({
            ok: true,
            listado,
            contador: count
        })
    })

};

ctrl.busqueda = async(req, res) => {

    const busqueda = req.params.value;

    let listado = await facturacion_model.find({ cliente: { $regex: RegExp(busqueda, 'i') } }).sort({ fechaCreacion: -1 })

    await facturacion_model.countDocuments({}, (err, count) => {
        if (err) {
            return res.json({
                ok: false,
                err
            })
        }

        return res.json({
            ok: true,
            listado,
            contador: count
        })
    })

};

ctrl.cedula = async(req, res) => {

    const busqueda = req.params.value;

    let cliente = await facturacion_model.findOne({ cedula: busqueda })

    if (cliente) {
        return res.json({
            ok: true,
            message: 'exito',
            cliente
        })
    }

    return res.json({
        ok: false,
        message: 'no se encontro cliente',
        cliente
    })



};

ctrl.lista = async(req, res) => {

    let id = req.params.id


    const listado = await facturacion_model.findById(id)


    .exec({}, (err, solicitud) => {
        if (err) {
            return res.json({
                ok: false,
                err
            })
        }
        return res.json({
            ok: true,
            solicitud,

        })
    })

};

ctrl.agregar = async(req, res) => {



    const usuario = new facturacion_model(req.body);

    Crud.agregar(usuario, req, res);
}


ctrl.actualizar = async(req, res) => {


    let id = req.params.id;
    let body = req.body

    Crud.actualizar(facturacion_model, id, body, req, res)
}

ctrl.eliminar = async(req, res) => {
    let id = req.params.id;
    Crud.eliminar(facturacion_model, id, req, res)
}


module.exports = ctrl