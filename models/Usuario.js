const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
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
    },
    calle: {
        type: String,
        required: true
    },
    numerocasa: {
        type: String,
        required: true
    },
    colonia: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);