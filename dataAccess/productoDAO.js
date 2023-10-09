const Producto = require('../models/Producto');

class ProductoDAO {
    constructor(){};

    static async crearProducto(productoData){
        try {
            const producto = new Producto(productoData);
            return await producto.save();
        } catch (error) {
            throw error;
        }
    }

    static async actualizarProducto(id, productoData){
        try {
            return await Producto.findByIdAndUpdate(id, productoData, {new: true});
        } catch (error) {
            throw error;
        }
    }

    static async eliminarProducto(id){
        try {
            return await Producto.findByIdAndRemove(id);
        } catch (error) {
            throw error;
        }
    }

    static async obtenerProductoPorID(id){
        try {
            return await Producto.findById(id);
        } catch (error) {
            throw error;
        }
    }

    static async obtenerProductos(){
        try {
            return await Producto.find();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductoDAO;