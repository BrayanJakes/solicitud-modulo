const router = require('express').Router();
const cliente_router = require('../controllers/cliente');
const { verifyToken } = require('../middlewares/verificacion');

router.get('/cliente', verifyToken, cliente_router.listar);
router.post('/cliente', verifyToken, cliente_router.agregar);
router.get('/cliente/:id', verifyToken, cliente_router.lista);
router.get('/cliente/cedula/:value', verifyToken, cliente_router.cedula);
router.get('/cliente/busqueda/:value', verifyToken, cliente_router.busqueda);
router.put('/cliente/:id', verifyToken, cliente_router.actualizar);
router.delete('/cliente/:id', verifyToken, cliente_router.eliminar);

module.exports = router;