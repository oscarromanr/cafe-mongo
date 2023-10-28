const ProductoDAO = require('../dataAccess/productoDAO');
const { AppError } = require('../utils/appError');

class ProductoController {
    static async crearProducto(req, res, next) {
        try {
            const {nombre, descripcion, precio, stock, categoria, imagenurl} = req.body;

            if(!nombre || !descripcion || !precio || !stock || !categoria || !imagenurl){
                return next(new AppError('No puede haber campos vacios', 404));
            }

            if(isNaN(precio) || isNaN(stock) || Number(precio) < 0 || Number(stock) < 0){
                return next(new AppError('Precio y stock deben ser valores numéricos no negativos', 400));
            }

            const productoData = {nombre, descripcion, precio, stock, categoria, imagenurl};

            const producto = await ProductoDAO.crearProducto(productoData);

            res.status(201).json({ message: 'Producto creado exitosamente', producto });
        } catch (error) {
            next(new AppError('Error al crear un Producto', 500))
        }
    }

    static async obtenerProductoPorId(req, res, next){
        try {
            const id = req.params.id;

            const producto = await ProductoDAO.obtenerProductoPorID(id);

            if(!producto){
                return next(new AppError('No se logro obtener el producto', 404))
            }

            res.status(200).json({ message: 'Producto obtenido exitosamente', producto });
        } catch (error) {
            next(new AppError('No se logro obtener el producto', 404))
        }
    }

    static async obtenerProductos(req, res, next){
        try {
            const productos = await ProductoDAO.obtenerProductos();

            res.status(200).json({ message: 'Productos obtenidos exitosamente', productos });
        } catch (error) {
            next(new AppError('No se logro obtener los productos', 404))
        }
    }

    static async actualizarProducto(req, res, next){
        try {
            const id = req.params.id;
            const productoData = req.body;

            const producto = await ProductoDAO.actualizarProducto(id, productoData);

            if(!producto){
                return next(new AppError('No se encontro el producto', 404))
            }

            res.status(200).json({ message: 'Producto actualizado exitosamente', producto });
        } catch (error) {
            next(new AppError('Error al actualizar el producto', 500))
        }
    }

    static async eliminarProducto(req, res, next){
        try {
            const id = req.params.id;

            const producto = await ProductoDAO.eliminarProducto(id);

            if(!producto){
                return next(new AppError('No se encontro el producto', 404))
            }

            res.status(200).json({ message: 'Producto eliminado exitosamente', producto });
        } catch (error) {
            next(new AppError('Error al eliminar el producto', 500))
        }
    }
}

module.exports = ProductoController;