const express = require('express');
const router = express.Router();
const AdministradorController = require('../controllers/AdministradorController');

router.post('/', AdministradorController.crearAdministrador);

router.get('/', AdministradorController.obtenerAdministradores);

router.get('/:id', AdministradorController.obtenerAdministradorPorId);

router.put('/:id', AdministradorController.actualizarAdministrador);

router.delete('/:id', AdministradorController.eliminarAdministrador);

module.exports = router;