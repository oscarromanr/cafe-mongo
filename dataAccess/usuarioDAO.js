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
            return await Usuario.findByIdAndUpdate(id, usuarioData, {new: true});
        } catch (error) {
            throw error;
        }
    }

    static async eliminarUsuario(id){
        try {
            return await Usuario.findByIdAndRemove(id);
        } catch (error) {
            throw error;
        }
    }

    static async obtenerUsuarioPorID(id){
        try {
            return await Usuario.findById(id);
        } catch (error) {
            throw error;
        }
    }

    static async obtenerUsuarios(){
        try {
            return await Usuario.find();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UsuarioDAO;