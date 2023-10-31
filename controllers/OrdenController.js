const OrdenDAO = require('../dataAccess/ordenDAO');
const { AppError } = require('../utils/appError');

class OrdenController {
    static async crearOrden(req, res, next){
        try {
            const {idUsuario, fechaOrden, estado, total, prodcutos, direccionEnvio, metodoPago} = req.body;

            if(!idUsuario || !fechaOrden || !estado || !total || prodcutos.length === 0 || !direccionEnvio || !metodoPago){
                return next(new AppError('Faltan campos por llenar', 404));
            }

            const ordenData = {idUsuario, fechaOrden, estado, total, prodcutos, direccionEnvio, metodoPago}

            const orden = await OrdenDAO.crearOrden(ordenData);

            res.status(201).json(orden);
        } catch (error) {
            next(new AppError('Error al crear orden', 500))
        }
    }

    static async obtenerOrdenPorId(req, res, next){
        try {
            const id = req.params.id;

            const orden = await OrdenDAO.obtenerOrdenPorId(id);

            if (!orden){
                return next(new AppError('No se pudo encontrar la orden', 404))
            }

            res.status(201).json(orden);
        } catch (error) {
            next(new AppError('No se pudo encontrar la orden', 404))
        }
    }

    static async obtenerOrdenes(req, res, next){
        try {
            const ordenes = await OrdenDAO.obtenerOrdenes();

            res.status(201).json(ordenes);
        } catch (error) {
            next(new AppError('No se pudo encontrar las ordenes', 404))
        }
    }

    static async actualizarOrdenes(req, res, next){
        try {
            const id = req.params.id;
            const ordenData = req.body;

            const orden = await OrdenDAO.actualizarOrden(id, ordenData);

            if(!orden){
                return next(new AppError('No se encontro la orden', 404));
            }

            res.status(200).json(orden);
        } catch (error) {
            next(new AppError('Error al actualizar la orden', 500))
        }
    }

    static async eliminarOrden(req, res, next){
        try {
            const id = req.params.id;

            const orden = await OrdenDAO.eliminarOrden(id);

            if(!orden){
                return next(new AppError('No se encontro la orden', 404))
            }

            res.status(200).json(orden);
        } catch (error) {
            next(new AppError('Error al eliminar la orden', 500))
        }
    }
}

module.exports = OrdenController;