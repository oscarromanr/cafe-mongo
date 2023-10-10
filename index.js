const mongoose = require('mongoose');
const db = require('./config/db');
const UsuarioDAO = require('./dataAccess/usuarioDAO');
const ProductoDAO = require('./dataAccess/productoDAO');
const PagoDAO = require('./dataAccess/pagoDAO');
const OrdenDAO = require('./dataAccess/ordenDAO');
const CarritoDAO = require('./dataAccess/carritoDAO');

db.conectar()
    .then(async () => {
        try {

            // Usuarios
            try {
                console.log('--------Pruebas de UsuariosDAO--------')
                const usuario1 = {
                    nombre: 'LaPiñataLoca',
                    email: 'lapinataloca@gmail.com',
                    password: 'piñataparty',
                    rol: 'Usuario',
                    calle: 'Calle de los Dulces',
                    numerocasa: '789',
                    colonia: 'Colonia Piñatas',
                    telefono: '9995558888'
                };

                const usuario2 = {
                    nombre: 'ElTacoLoco',
                    email: 'eltacoloco@gmail.com',
                    password: 'tacotac0',
                    rol: 'Usuario',
                    calle: 'Avenida de los Tacos',
                    numerocasa: '123',
                    colonia: 'Colonia Guacamole',
                    telefono: '5551234567'
                };

                const usuario3 = {
                    nombre: 'LaChalupaFiesta',
                    email: 'lachalupafiesta@gmail.com',
                    password: 'fiesta2023',
                    rol: 'Usuario',
                    calle: 'Calle del Mariachi',
                    numerocasa: '456',
                    colonia: 'Barrio Salsa',
                    telefono: '7779876543'
                };


                await UsuarioDAO.crearUsuario(usuario1);
                await UsuarioDAO.crearUsuario(usuario2);
                await UsuarioDAO.crearUsuario(usuario3);

                console.log('-> Usuarios creados correctamente')

                console.log('---Busqueda de todos los usuarios---')
                const usuarios = await UsuarioDAO.obtenerUsuarios();
                console.log('Lista de usuarios: ', usuarios)

                console.log('---Busqueda de usuario con id del primer producto---')

                const usuarioBusqueda = await UsuarioDAO.obtenerUsuarioPorID(usuarios[0]._id);

                if (usuarioBusqueda != null) {
                    console.log('Busqueda exitosa: ', usuarioBusqueda)

                } else {
                    console.log('No se encontró el usuario con el ID especificado.')
                }

                console.log('---Actualización del usuario con id 1---')

                usuarioNuevo = {
                    nombre: 'LaPiñataLoca',
                    email: 'lapinataloca@gmail.com',
                    password: 'piñataparty',
                    rol: 'Usuario',
                    calle: 'Calle de los Dulces nuevos',
                    numerocasa: '789',
                    colonia: 'Colonia Piñatas',
                    telefono: '9995558888'
                };


                const usuarioActualizar = await UsuarioDAO.actualizarUsuario(usuarios[0]._id, usuarioNuevo);

                if (usuarioActualizar != null) {
                    console.log('Usuario actualizado: ', usuarioActualizar)
                } else {
                    console.log('No se pudo actualizar al usuario especificado.')
                }

                console.log('---Eliminación del segundo usuario de la lista---')

                const usuarioEliminar = await UsuarioDAO.eliminarUsuario(usuarios[1]._id);

                console.log('Usuario eliminado correctamente: ', usuarioEliminar)
                console.log('---> Finalización de pruebas de Usuarios <---');
            } catch (error) {
                throw error;
            }

            // Productos
            try {
                console.log('--------Pruebas de ProductosDAO--------')
                const producto1 = {
                    nombre: 'Cafe Organico Tostado 250 gr',
                    descripcion: 'Presentación de 250 gramos. Cosechado en los altos de la Sierra de Zongolica, de manera artesanal por manos de indígenas nahuatl. Café Tatiaxca de grano arabiga y tueste medio, con gran aroma, cuerpo y acidez. Excelente calidad 100% Orgánico.',
                    precio: 199.99,
                    stock: 20,
                    categoria: 'Cafe en grano',
                    imagenurl: 'https://example.com/imagen-producto1.jpg'
                };
                const producto2 = {
                    nombre: 'Cafe Organico Tostado 500 gr',
                    descripcion: 'Presentación de 500 gramos. Cosechado en los altos de la Sierra de Zongolica, de manera artesanal por manos de indígenas nahuatl. Café Tatiaxca de grano arabiga y tueste medio, con gran aroma, cuerpo y acidez. Excelente calidad 100% Orgánico.',
                    precio: 379.99,
                    stock: 15,
                    categoria: 'Cafe en grano',
                    imagenurl: 'https://example.com/imagen-producto2.jpg'
                };
                const producto3 = {
                    nombre: 'Cafe Organico Tostado 1 kg',
                    descripcion: 'Presentación de 1000 gramos. Cosechado en los altos de la Sierra de Zongolica, de manera artesanal por manos de indígenas nahuatl. Café Tatiaxca de grano arabiga y tueste medio, con gran aroma, cuerpo y acidez. Excelente calidad 100% Orgánico.',
                    precio: 699.99,
                    stock: 32,
                    categoria: 'Cafe en grano',
                    imagenurl: 'https://example.com/imagen-producto3.jpg'
                };
                const producto4 = {
                    nombre: 'Cupcakes de chocolate',
                    descripcion: 'Pack de 12 cupcakes de chocolate con betun de queso crema y rodeado de chispas de chocolate, excelente opcion para compartir en cualquier evento familiar.',
                    precio: 240,
                    stock: 12,
                    categoria: 'Cafe en grano',
                    imagenurl: 'https://example.com/imagen-producto4.jpg'
                };

     
                await ProductoDAO.crearProducto(producto1);
                await ProductoDAO.crearProducto(producto2);
                await ProductoDAO.crearProducto(producto3);
                await ProductoDAO.crearProducto(producto4);

                console.log('-> Productos creados correctamente')

                console.log('---Busqueda de todos los productos---')
                const productos = await ProductoDAO.obtenerProductos();
                console.log('Lista de productos: ', productos)

                console.log('---Busqueda de producto con id del primer producto---')

                const productoBusqueda = await ProductoDAO.obtenerProductoPorID(productos[0]._id);

                if (productoBusqueda != null) {
                    console.log('Busqueda exitosa: ', productoBusqueda)

                } else {
                    console.log('No se encontró el producto con el ID especificado.')
                }

                console.log('---Actualización del producto 1---')

                productoNuevo = {
                    nombre: 'Cafe Organico Tostado 250 gr',
                    descripcion: 'Presentación de 250 gr. Cosechado en los altos de la Sierra de Zongolica, de manera artesanal por manos de indígenas nahuatl. Café Tatiaxca de grano arabiga y tueste medio, con gran aroma, cuerpo y acidez. Excelente calidad 100% Orgánico.',
                    precio: 170,
                    stock: 35,
                    categoria: 'Cafe en grano',
                    imagenurl: 'https://example.com/imagen-producto1.jpg'
                };
                    

                const productoActualizar = await ProductoDAO.actualizarProducto(productos[0]._id, productoNuevo);

                if (productoActualizar != null) {
                    console.log('Producto actualizado: ', productoActualizar)
                } else {
                    console.log('No se pudo actualizar el producto especificado.')
                }

                console.log('---Eliminación del 4to producto---')

                const productoEliminar = await ProductoDAO.eliminarProducto(productos[3]._id);

                console.log('Producto eliminado correctamente: ', productoEliminar)
                console.log('---> Finalización de pruebas de Productos <---');
            } catch (error) {
                throw error;
            }

            // Pagos
            try {
                console.log('--------Pruebas de PagoDAO--------');

                const pago1 = {
                    idUsuario: '65249086a443c855443f3b38',
                    monto: 150.20,
                    metodoPago: 'Tarjeta',
                    fechaPago: new Date()
                }
                const pago2 = {
                    idUsuario: '65249086a443c855443f3b3c',
                    monto: 180.50,
                    metodoPago: 'Trasnferencia',
                    fechaPago: new Date()
                }
                const pago3 = {
                    idUsuario: '65249086a443c855443f3b38',
                    monto: 200.50,
                    metodoPago: 'Tarjeta',
                    fechaPago: new Date()
                }

                await PagoDAO.crearPago(pago1);
                await PagoDAO.crearPago(pago2);
                await PagoDAO.crearPago(pago3);

                console.log('-> Pagos creados correctamente');

                console.log('Consultar todos los pagos');

                let pagos = await PagoDAO.obtenerPagos();

                console.log('lista de pagos:', pagos);

                console.log('Buscar un pago por id');

                let pagoBusqueda = await PagoDAO.obtenerPagoPorId(pagos[0]._id);

                if(pagoBusqueda == null){
                    console.log('No existe el pago');
                } else {
                    console.log('Pago: ', pagoBusqueda);
                }

                console.log('Actualizar un pago por id');

                const pagoNuevo = {
                    idUsuario: '65249086a443c855443f3b38',
                    monto: 170.60,
                    metodoPago: 'Tarjeta',
                    fechaPago: new Date()
                }

                pagoBusqueda = await PagoDAO.actualizarPago(pagos[0]._id, pagoNuevo);
                
                if(pagoBusqueda == null){
                    console.log('No existe el pago');
                } else {
                    console.log('Pago actualizado: ', pagoBusqueda);
                }

                console.log('Eliminar un pago por id');

                const pagoEliminado = await PagoDAO.eliminarPago(pagos[1]._id);

                if(pagoBusqueda == null){
                    console.log('No existe el pago');
                } else {
                    console.log('Pago eliminado: ', pagoEliminado);
                }

            } catch (error) {
                throw error;
            }

            try {
                console.log('--------Pruebas de OrdenesDAO--------');
                const producto1 = {
                    nombre: 'Cafe Organico Tostado 250 gr',
                    descripcion: 'Presentación de 250 gramos. Cosechado en los altos de la Sierra de Zongolica, de manera artesanal por manos de indígenas nahuatl. Café Tatiaxca de grano arabiga y tueste medio, con gran aroma, cuerpo y acidez. Excelente calidad 100% Orgánico.',
                    precio: 199.99,
                    stock: 20,
                    categoria: 'Cafe en grano',
                    imagenurl: 'https://example.com/imagen-producto1.jpg'
                };
                const producto2 = {
                    nombre: 'Cafe Organico Tostado 500 gr',
                    descripcion: 'Presentación de 500 gramos. Cosechado en los altos de la Sierra de Zongolica, de manera artesanal por manos de indígenas nahuatl. Café Tatiaxca de grano arabiga y tueste medio, con gran aroma, cuerpo y acidez. Excelente calidad 100% Orgánico.',
                    precio: 379.99,
                    stock: 15,
                    categoria: 'Cafe en grano',
                    imagenurl: 'https://example.com/imagen-producto2.jpg'
                };
                const producto3 = {
                    nombre: 'Cafe Organico Tostado 1 kg',
                    descripcion: 'Presentación de 1000 gramos. Cosechado en los altos de la Sierra de Zongolica, de manera artesanal por manos de indígenas nahuatl. Café Tatiaxca de grano arabiga y tueste medio, con gran aroma, cuerpo y acidez. Excelente calidad 100% Orgánico.',
                    precio: 699.99,
                    stock: 32,
                    categoria: 'Cafe en grano',
                    imagenurl: 'https://example.com/imagen-producto3.jpg'
                };
                const producto4 = {
                    nombre: 'Cupcakes de chocolate',
                    descripcion: 'Pack de 12 cupcakes de chocolate con betun de queso crema y rodeado de chispas de chocolate, excelente opcion para compartir en cualquier evento familiar.',
                    precio: 240,
                    stock: 12,
                    categoria: 'Cafe en grano',
                    imagenurl: 'https://example.com/imagen-producto4.jpg'
                };

                const orden1 = {
                    idUsuario: '65249086a443c855443f3b38',
                    fechaOrden: new Date(),
                    estado: 'En curso',
                    total: 200.20,
                    productos: [producto1, producto2, producto3],
                    direccionEnvio: 'San juan 123',
                    metodoPago: 'Tarjeta'
                }
                const orden2 = {
                    idUsuario: '65249086a443c855443f3b3c',
                    fechaOrden: new Date(),
                    estado: 'En curso',
                    total: 220.60,
                    productos: [producto2, producto4, producto3],
                    direccionEnvio: 'San Martin 123',
                    metodoPago: 'Trasnferencia'
                }
                const orden3 = {
                    idUsuario: '65249086a443c855443f3b3c',
                    fechaOrden: new Date(),
                    estado: 'En curso',
                    total: 260.80,
                    productos: [producto2, producto4, producto3, producto1],
                    direccionEnvio: 'San Lazaro 123',
                    metodoPago: 'Tarjeta'
                }

                await OrdenDAO.crearOrden(orden1);
                await OrdenDAO.crearOrden(orden2);
                await OrdenDAO.crearOrden(orden3);

                console.log('-> Ordenes creadas correctamente')

                console.log('Obtener todas las ordenes');

                let ordenes = await OrdenDAO.obtenerOrdenes();

                console.log('Ordenes: ', ordenes);

                console.log('Obtener orden por id');

                let ordenBuscar = await OrdenDAO.obtenerOrdenPorId(ordenes[0]._id);

                if(ordenBuscar != null){
                    console.log('Orden encontrada :',ordenBuscar);
                } else {
                    console.log('No se encontro');
                }

                console.log('Actualizar una orden por id');

                const nuevaOrden = {
                    idUsuario: '65249086a443c855443f3b38',
                    fechaOrden: new Date(),
                    estado: 'Finalizada',
                    total: 200.20,
                    productos: [producto1, producto2, producto3],
                    direccionEnvio: 'San juan 123',
                    metodoPago: 'Tarjeta'
                }

                ordenBuscar = await OrdenDAO.actualizarOrden(ordenes[0]._id, nuevaOrden);
                if(ordenBuscar != null){
                    console.log('Orden actualizada :',ordenBuscar);
                } else {
                    console.log('No se encontro');
                }

                console.log('Eliminar una orden por id');
                const ordenEliminar = await OrdenDAO.eliminarOrden(ordenes[2]._id);

                if(ordenBuscar != null){
                    console.log('Orden eliminada :',ordenEliminar);
                } else {
                    console.log('No se encontro');
                }

            } catch (error) {
                throw error;
            }

            db.desconectar();
        } catch (error) {
            console.error('Error en las pruebas:', error);
        }
    }).catch(err => {
        console.error('Error en la conexión a la base de datos:', err);
    })