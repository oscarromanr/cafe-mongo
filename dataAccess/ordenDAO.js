const Orden = require('../models/Orden');

class OrdenDAO {
    constructor(){};

    static async crearOrden(ordenData){
        try {
            const orden = new Orden(ordenData);
            return await orden.save();
        } catch (error) {
            throw error;
        }
    }

    static async actualizarOrden(id, ordenData){
        try {
            return await Orden.findByIdAndUpdate(id, ordenData, {new: true});
        } catch (error) {
            throw error;
        }
    }

    static async eliminarOrden(id){
        try {
            return await Orden.findByIdAndRemove(id);
        } catch (error) {
            throw error;
        }
    }

    static async obtenerOrdenPorId(id){
        try {
            return await Orden.findById(id);
        } catch (error) {
            throw error;
        }
    }

    static async obtenerOrdenesPorUsuario(idUsuario){
        try {
            return await Orden.find({idUsuario: idUsuario});
        } catch (error) {
            throw error;
        }
    }

    static async obtenerOrdenes(){
        try {
            return await Orden.find();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = OrdenDAO;