const mongoose = require('mongoose');

const administradorSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Administrador', administradorSchema);