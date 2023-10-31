const express = require('express');
const router = express.Router();
const ProductoController = require('../controllers/ProductoController');
const { verificarToken } = require('../auth/authentication');

router.post('/', verificarToken, ProductoController.crearProducto);

router.get('/', verificarToken, ProductoController.obtenerProductos);

router.get('/:id', verificarToken, ProductoController.obtenerProductoPorId);

router.put('/:id', verificarToken, ProductoController.actualizarProducto);

router.delete('/:id', verificarToken, ProductoController.eliminarProducto);

module.exports = router;