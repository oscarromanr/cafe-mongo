const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '../variables.env' });
const secretKey = process.env.llaveSecreta;

async function verificarToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        jwt.verify(req.token, secretKey, (error, authData) => {
            if(error){
                res.sendStatus(403);
            } else {
                req.authData = authData;
                next();
            }
        })
    } else {
        return res.status(403).json({ mensaje: 'Token no proporcionado' });
    }
}

function verificarRolUsuario(rolRequerido) {
    return (req, res, next) => {
        const usuario = req.usuario;
        if (usuario && usuario.rol === rolRequerido) {
            next();
        } else {
            res.status(403).json({ mensaje: 'Acceso no autorizado a usuarios de tipo ' + usuario.rol });
        }
    };
}

function verificarRespuesta(req, res, next){
    jwt.verify(req.token, secretKey, (error, authData) => {
        if(error){
            res.sendStatus(403);
        } else {
            res.json({
                mensaje: "Se realizo la operacion",
                authData: authData
            })
            next()
        }
    })
}

// Método para generar un token JWT
async function generarToken(usuario) {
    const payload = {
        idUsuario: usuario.idUsuario,
        rol: usuario.rol
    };

    // Generar el token con el payload y la clave secreta
    const token = jwt.sign(payload, secretKey, { expiresIn: '24h' }); 

    return token;
}

module.exports = {
    verificarToken,
    generarToken,
    verificarRolUsuario,
    verificarRespuesta
};