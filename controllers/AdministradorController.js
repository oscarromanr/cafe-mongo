const AdministradorDAO = require('../dataAccess/administradorDAO');
const { AppError } = require('../utils/appError');
const { generarTokenAdministrador } = require('../auth/authentication')

class AdministradorController {
    static async crearAdministrador(req, res, next){
        try {
            const {nombre, email, password, rol} = req.body;

            if(!nombre || !email || !password || !rol){
                return next(new AppError('Faltan campos por llenar', 404));
            }

            const administradorData = {nombre, email, password, rol}

            const administrador = await AdministradorDAO.crearAdministrador(administradorData);

            res.status(200).json(administrador);
        } catch (error) {
            next(new AppError('Error al crear el administrador', 500))
        }
    }

    static async inicioSesion(req, res, next){
        try {
            const id = req.params.id;
            
            const administrador = await AdministradorDAO.obtenerAdministradorPorId(id)

            if (!administrador) {
                return next(new AppError('No se encontro el administrador', 404));
            }
            
            const token = await generarTokenAdministrador(administrador);

            res.status(200).json({
                "message": "Token generado con éxito para administrador " + administrador.rol,
                "token": token
            });
            
        } catch (error) { 
            next(new AppError('Error al iniciar sesion: ' + error.message, 500))
        }
    }

    static async obtenerAdministradorPorId(req, res, next){
        try {
            const id = req.params.id;

            const administrador = await AdministradorDAO.obtenerAdministradorPorId(id);

            if (!administrador){
                return next(new AppError('No se logró obtener el administrador', 404))
            }

            res.status(200).json({ message: 'Administrador obtenido exitosamente', administrador });
        } catch (error) {
            next(new AppError('No se pudo encontrar el administrador', 404))
        }
    }

    static async obtenerAdministradorPorCorreo(req, res, next) {
        try {
            const email = req.params.email;

            const administrador = await AdministradorDAO.obtenerAdministradorPorCorreo(email);

            if (!administrador) {
                return next(new AppError('No se logró obtener el administrador por correo', 404))
            }

            res.status(200).json({ message: 'Administrador obtenido exitosamente', administrador });
        } catch (error) {
            next(new AppError('No se logró obtener el administrador por correo', 404))
        }
    }

    static async obtenerAdministradores(req, res, next){
        try {
            const administradores = await AdministradorDAO.obtenerAdministradores();

            res.status(201).json(administradores);
        } catch (error) {
            next(new AppError('No se pudo encontrar los administradores', 404))
        }
    }

    static async actualizarAdministrador(req, res, next){
        try {
            const id = req.params.id;
            const administradorData = req.body;

            const administrador = await AdministradorDAO.actualizarAdministrador(id, administradorData);

            if(!administrador){
                return next(new AppError('No se encontro el administrador', 404));
            }

            res.status(200).json(administrador);
        } catch (error) {
            next(new AppError('Error al actualizar el administrador', 500))
        }
    }

    static async eliminarAdministrador(req, res, next){
        try {
            const id = req.params.id;

            const administrador = await AdministradorDAO.eliminarAdministrador(id);

            if(!administrador){
                return next(new AppError('No se encontro el administrador', 404))
            }

            res.status(200).json(administrador);
        } catch (error) {
            next(new AppError('Error al eliminar el administrador', 500))
        }
    }
}

module.exports = AdministradorController;