const express = require('express');
const router = express.Router();
const CarritoController = require('../controllers/CarritoController');

router.post('/', CarritoController.crearCarrito);

router.get('/', CarritoController.obtenerCarritos);

router.get('/:id', CarritoController.obtenerCarritoPorId);

router.put('/:id', CarritoController.actualizarCarrito);

router.delete('/:id', CarritoController.eliminarCarrito);

module.exports = router;