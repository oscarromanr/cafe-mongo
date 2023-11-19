const express = require('express');
const router = express.Router();
const ProductoController = require('../controllers/ProductoController');
const { verificarToken } = require('../auth/authentication');

router.post('/', verificarToken, ProductoController.crearProducto);

//router.post('/', ProductoController.crearProducto);

router.get('/', ProductoController.obtenerProductos);

router.get('/:id', ProductoController.obtenerProductoPorId);

router.put('/:id', verificarToken, ProductoController.actualizarProducto);

router.delete('/:id', verificarToken, ProductoController.eliminarProducto);

//router.put('/:id', ProductoController.actualizarProducto);

//router.delete('/:id', ProductoController.eliminarProducto);

module.exports = router;