const mongoose = require('mongoose');

const pagoSchema = new mongoose.Schema({
    idUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    monto: {
        type: Number,
        required: true
    },
    metodoPago: {
        type: String,
        required: true
    },
    fechaPago: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Pago', pagoSchema);