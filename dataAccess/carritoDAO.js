const Carrito = require('../models/Carrito');

class CarritoDAO {
    constructor(){};

    static async crearCarrito(carritoData){
        try {
            const carrito  = new Carrito(carritoData);
            return await carrito.save();
        } catch (error) {
            throw error;
        }
    }

    static async actualizarCarrito(id, carritoData){
        try {
            return await Carrito.findByIdAndUpdate(id, carritoData, {new: true});
        } catch (error) {
            throw error;
        }
    }

    static async eliminarCarrito(id){
        try {
            return await Carrito.findByIdAndRemove(id);
        } catch (error) {
            throw error;
        }
    }

    static async obtenerCarritosPorId(id){
        try {
            return await Carrito.findById(id);
        } catch (error) {
            throw error;
        }
    }

    static async obtenerCarritos(){
        try {
            return await Carrito.find();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CarritoDAO;