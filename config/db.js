const mongoose = require('mongoose');
require('dotenv').config({ path: '../variables.env' });

const config = {
    url: process.env.URL_MONGO,
    options: {useNewUrlParser: true, useUnifiedTopology: true}
};

function conectar(){
    console.log(process.env.URL_MONGO);
    return mongoose.connect(config.url, config.options);
}

function desconectar(){
    return mongoose.disconnect();
}

module.exports = {conectar, desconectar};