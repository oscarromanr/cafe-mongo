const Administrador = require('../models/Administrador');

class AdministradorDAO {
    constructor(){};

    static async crearAdministrador(administradorData){
        try {
            const administrador = new Administrador(administradorData);
            return await administrador.save();
        } catch (error) {
            throw error;
        }
    }

    static async actualizarAdministrador(id, administradorData){
        try {
            return await Administrador.findByIdAndUpdate(id, administradorData, {new: true});
        } catch (error) {
            throw error;
        }
    }

    static async eliminarAdministrador(id){
        try {
            return await Administrador.findByIdAndRemove(id);
        } catch (error) {
            throw error;
        }
    }

    static async obtenerAdministradorPorID(id){
        try {
            return await Administrador.findById(id);
        } catch (error) {
            throw error;
        }
    }

    static async obtenerAdministradores(){
        try {
            return await Administrador.find();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AdministradorDAO;