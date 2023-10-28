const mongoose = require('mongoose');

const carritoSchema = new mongoose.Schema({
    idUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    productosEnCarrito: {
        type: Array,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Carrito', carritoSchema);