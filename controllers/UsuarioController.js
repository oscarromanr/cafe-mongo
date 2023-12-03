const UsuarioDAO = require('../dataAccess/usuarioDAO');
const { AppError } = require('../utils/appError');
const { generarToken } = require('../auth/authentication')

class UsuarioController {
    static async crearUsuario(req, res, next) {
        try {
            const { nombre, email, password, calle, numerocasa, colonia, telefono } = req.body;

            if (!nombre || !email || !password || !calle || !numerocasa || !colonia || !telefono) {
                return next(new AppError('No puede haber campos vacios', 404));
            }

            const rol = "Usuario";
            const usuarioData = { nombre, email, password, rol, calle, numerocasa, colonia, telefono };

            const usuario = await UsuarioDAO.crearUsuario(usuarioData);

            res.status(201).json({ message: 'Usuario creado exitosamente', usuario });
        } catch (error) {
            next(new AppError('Error al crear un Usuario', 500))
        }
    }

    static async inicioSesion(req, res, next){
        try {
            const id = req.params.id;
            
            const usuario = await UsuarioDAO.obtenerUsuarioPorID(id)

            if (!usuario) {
                return next(new AppError('No se encontro el usuario', 404));
            }
            
            const token = await generarToken(usuario);

            res.status(200).json({
                "message": "Token generado con éxito para usuario " + usuario.rol,
                "token": token
            });

        } catch (error) {
            next(new AppError('Error al iniciar sesion', 500))
        }
    }

    static async obtenerUsuarioPorId(req, res, next) {
        try {
            const id = req.params.id;

            const usuario = await UsuarioDAO.obtenerUsuarioPorID(id);

            if (!usuario) {
                return next(new AppError('No se logró obtener el usuario', 404))
            }

            res.status(200).json({ message: 'Usuario obtenido exitosamente', usuario });
        } catch (error) {
            next(new AppError('No se logró obtener el usuario', 404))
        }
    }

    static async obtenerUsuarioPorCorreo(req, res, next) {
        try {
            const email = req.params.email;

            const usuario = await UsuarioDAO.obtenerUsuarioPorCorreo(email);

            if (!usuario) {
                return next(new AppError('No se logró obtener el usuario por correo', 404))
            }

            res.status(200).json({ message: 'Usuario obtenido exitosamente', usuario });
        } catch (error) {
            next(new AppError('No se logró obtener el usuario por correo', 404))
        }
    }

    static async obtenerUsuarios(req, res, next) {
        try {
            const usuarios = await UsuarioDAO.obtenerUsuarios();

            res.status(200).json({ message: 'Usuarios obtenidos exitosamente', usuarios });
        } catch (error) {
            next(new AppError('No se logró obtener los usuarios', 404))
        }
    }

    static async actualizarUsuario(req, res, next) {
        try {
            const id = req.params.id;
            const usuarioData = req.body;

            const usuario = await UsuarioDAO.actualizarUsuario(id, usuarioData);

            if (!usuario) {
                return next(new AppError('No se encontró el usuario', 404))
            }

            res.status(200).json({ message: 'Usuario actualizado exitosamente', usuario });
        } catch (error) {
            next(new AppError('Error al actualizar el usuario', 500))
        }
    }

    static async eliminarUsuario(req, res, next) {
        try {
            const id = req.params.id;

            const usuario = await UsuarioDAO.eliminarUsuario(id);

            if (!usuario) {
                return next(new AppError('No se encontró el usuario', 404))
            }

            res.status(200).json({ message: 'Usuario eliminado exitosamente', usuario });
        } catch (error) {
            next(new AppError('Error al eliminar el usuario', 500))
        }
    }
}

module.exports = UsuarioController;