const express = require('express');
const router = express.Router();
const OrdenController = require('../controllers/OrdenController');
const { verificarToken, verificarTokenAdministrador } = require('../auth/authentication');

router.post('/', verificarToken, OrdenController.crearOrden);

router.get('/', verificarTokenAdministrador, OrdenController.obtenerOrdenes);

router.get('/:id', verificarToken, OrdenController.obtenerOrdenPorId);

router.put('/:id', verificarToken, OrdenController.actualizarOrdenes);

router.delete('/:id', verificarToken, OrdenController.eliminarOrden);

module.exports = router;