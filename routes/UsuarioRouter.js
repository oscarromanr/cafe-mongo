const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');
const { verificarToken, verificarTokenUsuarioAdministrador } = require('../auth/authentication');

router.post('/', UsuarioController.crearUsuario);

router.post('/:id', UsuarioController.inicioSesion);

router.get('/', UsuarioController.obtenerUsuarios);

router.get('/:id', UsuarioController.obtenerUsuarioPorId);

router.get('/email/:email', UsuarioController.obtenerUsuarioPorCorreo);

router.put('/:id', verificarToken, UsuarioController.actualizarUsuario);

router.delete('/:id', verificarTokenUsuarioAdministrador, UsuarioController.eliminarUsuario);

module.exports = router;