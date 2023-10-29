const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { globalHandlerError, AppError } = require('./utils/appError');
require('dotenv').config({path: './variables.env'});
const db = require('./config/db');

db.conectar();

app.use(bodyParser.json());
app.use(morgan('combined'));

// Rutas
const pagoRouter = require('./routes/PagoRouter');
const ordenRouter = require('./routes/OrdenRouter');
const usuarioRouter = require('./routes/UsuarioRouter');
const productoRouter = require('./routes/ProductoRouter');
const AdministradorRouter = require('./routes/AdministradorRouter');
const CarritoRouter = require('./routes/CarritoRouter');

app.use('/api/pagos', pagoRouter);

app.use('/api/ordenes', ordenRouter);

app.use('/api/usuarios', usuarioRouter);

app.use('/api/productos', productoRouter);

app.use('/api/administradores', AdministradorRouter);

app.use('/api/carritos', CarritoRouter);

app.all('*', (req, res, next) => {
    next(new AppError('No se pudo acceder a la ruta', 404));
})

app.use(globalHandlerError);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Servidor corriendo en el puerto: ' + port)
})