const express = require('express');
const router = express.Router();
const PagoController = require('../controllers/PagoController');
const { verificarToken, verificarTokenAdministrador } = require('../auth/authentication');

const user = 'Admin'

router.post('/', verificarToken, PagoController.crearPago);

router.get('/', verificarTokenAdministrador, PagoController.obtenerPagos);

router.get('/:id', verificarToken, PagoController.obtenerPagosPorId);

router.put('/:id', verificarToken, PagoController.actualizarPago);

router.delete('/:id', verificarToken, PagoController.eliminarPago);

module.exports = router;