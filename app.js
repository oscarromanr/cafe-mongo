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

app.use('/api/pagos', pagoRouter);

app.all('*', (req, res, next) => {
    next(new AppError('No se pudo acceder a la ruta', 404));
})

app.use(globalHandlerError);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Servidor corriendo en el puerto: ' + port)
})