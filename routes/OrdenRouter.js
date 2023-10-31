const express = require('express');
const router = express.Router();
const OrdenController = require('../controllers/OrdenController');
const { verificarToken } = require('../auth/authentication');

router.post('/', verificarToken, OrdenController.crearOrden);

router.get('/', OrdenController.obtenerOrdenes);

router.get('/:id', OrdenController.obtenerOrdenPorId);

router.put('/:id', verificarToken, OrdenController.actualizarOrdenes);

router.delete('/:id', verificarToken, OrdenController.eliminarOrden);

module.exports = router;