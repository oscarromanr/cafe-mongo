const express = require('express');
const router = express.Router();
const CarritoController = require('../controllers/CarritoController');
const { verificarToken } = require('../auth/authentication');

router.post('/', verificarToken, CarritoController.crearCarrito);

router.get('/', CarritoController.obtenerCarritos);

router.get('/:id', CarritoController.obtenerCarritoPorId);

router.put('/:id', verificarToken, CarritoController.actualizarCarrito);

router.delete('/:id', verificarToken, CarritoController.eliminarCarrito);

module.exports = router;