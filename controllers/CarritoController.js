const CarritoDAO = require('../dataAccess/carritoDAO');
const { AppError } = require('../utils/appError');

class CarritoController {
    static async crearCarrito(req, res, next){
        try {
            const {idUsuario, productosEnCarrito, total} = req.body;

            if(!idUsuario || productosEnCarrito.length === 0 || !total){
                return next(new AppError('Faltan campos por llenar', 404));
            }

            const carritoData = {idUsuario, productosEnCarrito, total}

            const carrito = await CarritoDAO.crearCarrito(carritoData);

            res.status(200).json(carrito);
        } catch (error) {
            next(new AppError('Error al crear el carrito', 500))
        }
    }

    static async obtenerCarritoPorId(req, res, next){
        try {
            const id = req.params.id;

            const carrito = await CarritoDAO.obtenerCarritosPorId(id);

            if (!carrito){
                return next(new AppError('No se pudo encontrar el carrito', 404))
            }

            res.status(201).json(carrito);
        } catch (error) {
            next(new AppError('No se pudo encontrar el carrito', 404))
        }
    }

    static async obtenerCarritos(req, res, next){
        try {
            const carritos = await CarritoDAO.obtenerCarritos();

            res.status(201).json(carritos);
        } catch (error) {
            next(new AppError('No se pudo encontrar los carritos', 404))
        }
    }

    static async actualizarCarrito(req, res, next){
        try {
            const id = req.params.id;
            const carritoData = req.body;

            const carrito = await CarritoDAO.actualizarCarrito(id, carritoData);

            if(!carrito){
                return next(new AppError('No se encontro el carrito', 404));
            }

            res.status(200).json(carrito);
        } catch (error) {
            next(new AppError('Error al actualizar el carrito', 500))
        }
    }

    static async eliminarCarrito(req, res, next){
        try {
            const id = req.params.id;

            const carrito = await CarritoDAO.eliminarCarrito(id);

            if(!carrito){
                return next(new AppError('No se encontro el carrito', 404))
            }

            res.status(200).json(carrito);
        } catch (error) {
            next(new AppError('Error al eliminar el carrito', 500))
        }
    }
}

module.exports = CarritoController;