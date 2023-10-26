const PagoDAO = require('../dataAccess/pagoDAO');
const { AppError } = require('../utils/appError');

class PagoController {
    static async crearPago(req, res, next) {
        try {
            const {idUsuario, monto, metodoPago, fechaPago} = req.body;

            if(!idUsuario || !monto || !metodoPago || !fechaPago){
                next(new AppError('No puede haber campos vacios', 404));
            }

            const pagoData = {idUsuario, monto, metodoPago, fechaPago};

            const pago = await PagoDAO.crearPago(pagoData);

            res.status(201).json(pago);
        } catch (error) {
            next(new AppError('Error al crear un pago', 500))
        }
    }

    static async obtenerPagoPorId(req, res, next){
        try {
            const id = req.params.id;

            const pago = await PagoDAO.obtenerPagoPorId(id);

            if(!pago){
                next(new AppError('No se logro obtener el pago', 404))
            }

            res.status(200).json(pago);
        } catch (error) {
            next(new AppError('No se logro obtener el pago', 404))
        }
    }

    static async obtenerPagos(req, res, next){
        try {
            const pagos = await PagoDAO.obtenerPagos();

            res.status(200).json(pagos);
        } catch (error) {
            next(new AppError('No se logro obtener los pagos', 404))
        }
    }

    static async actualizarPago(req, res, next){
        try {
            const id = req.params.id;
            const pagoData = req.body;

            const pago = await PagoDAO.actualizarPago(id, pagoData);

            if(!pago){
                next(new AppError('No se encontro el pago', 404))
            }

            res.status(200).json(pago);
        } catch (error) {
            next(new AppError('Error al actualizar el pago', 500))
        }
    }

    static async eliminarPago(req, res, next){
        try {
            const id = req.params.id;

            const pago = await PagoDAO.eliminarPago(id);

            if(!pago){
                next(new AppError('No se encontro el pago', 404))
            }

            res.status(200).json(pago);
        } catch (error) {
            next(new AppError('Error al eliminar el pago', 500))
        }
    }
}

module.exports = PagoController;