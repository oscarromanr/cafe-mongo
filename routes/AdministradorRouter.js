const express = require('express');
const router = express.Router();
const AdministradorController = require('../controllers/AdministradorController');
const { verificarToken } = require('../auth/authentication');

router.post('/', AdministradorController.crearAdministrador);

router.get('/', AdministradorController.obtenerAdministradores);

router.get('/:id', AdministradorController.obtenerAdministradorPorId);

router.put('/:id', verificarToken, AdministradorController.actualizarAdministrador);

router.delete('/:id', verificarToken, AdministradorController.eliminarAdministrador);

module.exports = router;