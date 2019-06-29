const router = require('express').Router();
const producto_router = require('../controllers/producto');
const { verifyToken } = require('../middlewares/verificacion');

router.get('/producto', verifyToken, producto_router.listar);
router.post('/producto', verifyToken, producto_router.agregar);
router.get('/producto/:id', verifyToken, producto_router.lista);
router.get('/producto/busqueda/:value', verifyToken, producto_router.busqueda);
router.get('/producto/codigo/:value', verifyToken, producto_router.codigoProducto);
router.put('/producto/:id', verifyToken, producto_router.actualizar);
router.delete('/producto/:id', verifyToken, producto_router.eliminar);




module.exports = router;