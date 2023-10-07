const mongoose = require('mongoose');

const ordenSchema = new mongoose.Schema({
    idUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    fechaOrden: {
        type: Date,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    productos: {
        type: Array,
        required: true
    },
    direccionEnvio: {
        type: String,
        required: true
    },
    metodoPago: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Orden', ordenSchema);