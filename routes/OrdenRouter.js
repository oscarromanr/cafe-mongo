const express = require('express');
const router = express.Router();
const OrdenController = require('../controllers/OrdenController');

router.post('/', OrdenController.crearOrden);

router.get('/', OrdenController.obtenerOrdenes);

router.get('/:id', OrdenController.obtenerOrdenPorId);

router.put('/:id', OrdenController.actualizarOrdenes);

router.delete('/:id', OrdenController.eliminarOrden);

module.exports = router;