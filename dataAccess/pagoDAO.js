const Pago = require('../models/Pago');

class PagoDAO {
    constructor(){};

    static async crearPago(pagoData){
        try {
            const pago  = new Pago(pagoData);
            return await pago.save();
        } catch (error) {
            throw error;
        }
    }

    static async actualizarPago(id, pagoData){
        try {
            return await Pago.findByIdAndUpdate(id, pagoData, {new: true});
        } catch (error) {
            throw error;
        }
    }

    static async eliminarPago(id){
        try {
            return await Pago.findByIdAndRemove(id);
        } catch (error) {
            throw error;
        }
    }

    static async obtenerPagosPorId(id){
        try {
            return await Pago.findById(id);
        } catch (error) {
            throw error;
        }
    }

    static async obtenerPagos(){
        try {
            return await Pago.find();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = PagoDAO;