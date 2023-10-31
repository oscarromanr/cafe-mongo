const express = require('express');
const router = express.Router();
const PagoController = require('../controllers/PagoController');
const { verificarToken } = require('../auth/authentication');

const user = 'Admin'

router.post('/', verificarToken, PagoController.crearPago);

router.get('/', PagoController.obtenerPagos);

router.get('/:id', PagoController.obtenerPagoPorId);

router.put('/:id', verificarToken, PagoController.actualizarPago);

router.delete('/:id', verificarToken, PagoController.eliminarPago);

module.exports = router;