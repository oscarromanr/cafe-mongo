const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '../variables.env' });
const secretKey = process.env.llaveSecreta;

async function decodeToken(token) {
    try {
        const decoded = jwt.verify(token, secretKey);
        return decoded;
    } catch (error) {
        console.error('Token inválido o expirado', token);
        return null;
    }
}

// verificar token de administrador, dentro del token decodificado se encuentra el idAdministrador, por lo tanto revisar eso para verificar si es administrador
async function verificarTokenAdministrador(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        const decoded = await decodeToken(req.token);
        if (decoded === null) {
            return res.status(403).json({ mensaje: 'Token inválido' });
        }
        const rol = decoded && decoded.rol;

        jwt.verify(req.token, secretKey, (error, authData) => {
            if (error) {
                res.sendStatus(403);
            } else {
                if (rol !== 'admin') {
                    return res.status(403).json({ mensaje: 'Acceso no autorizado a administradores/usuarios de tipo ' + rol });
                }
                req.authData = authData;
                next();
            }
        });
    } else {
        return res.status(403).json({ mensaje: 'Token no proporcionado' });
    }
}

async function verificarToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        const decoded = await decodeToken(req.token);
        if (decoded === null) {
            return res.status(403).json({ mensaje: 'Token inválido' });
        }
        const rol = decoded && decoded.rol;

        jwt.verify(req.token, secretKey, (error, authData) => {
            if (error) {
                res.sendStatus(403);
            } else {
                if (rol !== 'Usuario') {
                    return res.status(403).json({ mensaje: 'Acceso no autorizado a usuarios de tipo ' + rol });
                }
                
                const idUsuario = decoded && decoded.idUsuario;
                if (idUsuario !== req.params.id) {
                    return res.status(403).json({ mensaje: 'Acceso no autorizado al usuario, el id del usuario a eliminar no coincide con las credenciales proporcionadas'});
                }
                    
                req.authData = authData;
                next();
            }
        })
    } else {
        return res.status(403).json({ mensaje: 'Token no proporcionado' });
    }
}


async function verificarTokenUsuarioAdministrador(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        const decoded = await decodeToken(req.token);
        if (decoded === null) {
            return res.status(403).json({ mensaje: 'Token inválido' });
        }
        const rol = decoded && decoded.rol;

        jwt.verify(req.token, secretKey, (error, authData) => {
            if (error) {
                res.sendStatus(403);
            } else {
                if (rol !== 'admin' && rol !== 'Usuario') {
                    return res.status(403).json({ mensaje: 'Acceso no autorizado a administradores/usuarios de tipo ' + rol });
                }
                if (rol === 'Usuario') {
                    const idUsuario = decoded && decoded.idUsuario;
                    if (idUsuario !== req.params.id) {
                        return res.status(403).json({ mensaje: 'Acceso no autorizado al usuario, el id del usuario a eliminar no coincide con las credenciales proporcionadas'});
                    }
                }
                    
                req.authData = authData;
                next();
            }
        }
        );
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

function verificarRolAdministrador(rolRequerido) {
    return (req, res, next) => {
        const administrador = req.administrador;
        if (administrador && administrador.rol === rolRequerido) {
            next();
        } else {
            res.status(403).json({ mensaje: 'Acceso no autorizado a administradores de tipo ' + administrador.rol });
        }
    };
}

async function generarTokenAdministrador(admin){
    const payload = {
        idAdministrador: admin._id,
        rol: admin.rol
    };

    const token = jwt.sign(payload, secretKey, { expiresIn: '24h' });

    return token;
}

// Método para generar un token JWT
async function generarToken(usuario) {
    const payload = {
        idUsuario: usuario._id,
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
    verificarTokenAdministrador,
    verificarRespuesta,
    verificarRolAdministrador,
    generarTokenAdministrador,
    decodeToken,
    verificarTokenUsuarioAdministrador
};