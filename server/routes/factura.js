const router = require('express').Router();
const factura_router = require('../controllers/factura');
const { verifyToken } = require('../middlewares/verificacion');

router.get('/factura', verifyToken, factura_router.listar);
router.post('/factura', verifyToken, factura_router.agregar);
router.get('/factura/:id', verifyToken, factura_router.lista);
router.get('/factura/busqueda/:value', verifyToken, factura_router.busqueda);
router.put('/factura/:id', verifyToken, factura_router.actualizar);
router.delete('/factura/:id', verifyToken, factura_router.eliminar);




module.exports = router;