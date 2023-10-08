const Usuario = require('../models/Usuario');

class UsuarioDAO {
    constructor(){};

    static async crearUsuario(usuarioData){
        try {
            const usuario = new Usuario(usuarioData);
            return await usuario.save();
        } catch (error) {
            throw error;
        }
    }

    static async actualizarUsuario(id, usuarioData){
        try {
            return await usuario.findByIdAndUpdate(id, usuarioData, {new: true});
        } catch (error) {
            throw error;
        }
    }

    static async eliminarUsuario(id){
        try {
            return await usuario.findByIdAndRemove(id);
        } catch (error) {
            throw error;
        }
    }

    static async obtenerUsuarioPorId(id){
        try {
            return await usuario.findById(id);
        } catch (error) {
            throw error;
        }
    }

    static async obtenerUsuarios(){
        try {
            return await usuario.find();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UsuarioDAO;