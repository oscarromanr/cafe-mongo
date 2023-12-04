const express = require('express');
const router = express.Router();
const ProductoController = require('../controllers/ProductoController');
const { verificarTokenAdministrador } = require('../auth/authentication');

router.post('/', verificarTokenAdministrador, ProductoController.crearProducto);

router.get('/', ProductoController.obtenerProductos);

router.get('/:id', ProductoController.obtenerProductoPorId);

router.put('/:id', verificarTokenAdministrador, ProductoController.actualizarProducto);

router.delete('/:id', verificarTokenAdministrador, ProductoController.eliminarProducto);

module.exports = router;