const crud = require('../config/crudmongo');
const producto_model = require('../models/producto');

const ctrl = {};

const Crud = new crud();

ctrl.listar = async(req, res) => {



    let listado = await producto_model.find().sort({ fechaCreacion: -1 })

    await producto_model.countDocuments({}, (err, count) => {
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

    let listado = await producto_model.find({ producto: { $regex: RegExp(busqueda, 'i') } }).sort({ fechaCreacion: -1 })

    await producto_model.countDocuments({}, (err, count) => {
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

ctrl.codigoProducto = async(req, res) => {

    const busqueda = req.params.value;


    let codigoProducto = await producto_model.findOne({ codigoProducto: busqueda })

    if (codigoProducto) {
        return res.json({
            ok: true,
            message: 'Exito',
            codigoProducto
        })
    }
    return res.json({
        ok: false,
        message: 'No existe codigo',
        codigoProducto
    })

};




ctrl.lista = async(req, res) => {

    let id = req.params.id


    const listado = await producto_model.findById(id)


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



    const usuario = new producto_model(req.body);

    Crud.agregar(usuario, req, res);
}


ctrl.actualizar = async(req, res) => {


    let id = req.params.id;
    let body = req.body

    Crud.actualizar(producto_model, id, body, req, res)
}

ctrl.eliminar = async(req, res) => {
    let id = req.params.id;
    Crud.eliminar(producto_model, id, req, res)
}


module.exports = ctrl