const mongoose = require('mongoose');
const db = require('./config/db');
const UsuarioDAO = require('./dataAccess/usuarioDAO');
const ProductoDAO = require('./dataAccess/productoDAO');
const CarritoDAO = require('./dataAccess/carritoDAO');
const AdministradorDAO = require('./dataAccess/administradorDAO');

db.conectar()
    .then(async () => {
        try {

            // // Usuarios
            // try {
            //     console.log('--------Pruebas de UsuariosDAO--------')
            //     const usuario1 = {
            //         nombre: 'LaPiñataLoca',
            //         email: 'lapinataloca@gmail.com',
            //         password: 'piñataparty',
            //         rol: 'Usuario',
            //         calle: 'Calle de los Dulces',
            //         numerocasa: '789',
            //         colonia: 'Colonia Piñatas',
            //         telefono: '9995558888'
            //     };

            //     const usuario2 = {
            //         nombre: 'ElTacoLoco',
            //         email: 'eltacoloco@gmail.com',
            //         password: 'tacotac0',
            //         rol: 'Usuario',
            //         calle: 'Avenida de los Tacos',
            //         numerocasa: '123',
            //         colonia: 'Colonia Guacamole',
            //         telefono: '5551234567'
            //     };

            //     const usuario3 = {
            //         nombre: 'LaChalupaFiesta',
            //         email: 'lachalupafiesta@gmail.com',
            //         password: 'fiesta2023',
            //         rol: 'Usuario',
            //         calle: 'Calle del Mariachi',
            //         numerocasa: '456',
            //         colonia: 'Barrio Salsa',
            //         telefono: '7779876543'
            //     };


            //     await UsuarioDAO.crearUsuario(usuario1);
            //     await UsuarioDAO.crearUsuario(usuario2);
            //     await UsuarioDAO.crearUsuario(usuario3);

            //     console.log('-> Usuarios creados correctamente')

            //     console.log('---Busqueda de todos los usuarios---')
            //     const usuarios = await UsuarioDAO.obtenerUsuarios();
            //     console.log('Lista de usuarios: ', usuarios)

            //     console.log('---Busqueda de usuario con id del primer producto---')

            //     const usuarioBusqueda = await UsuarioDAO.obtenerUsuarioPorID(usuarios[0]._id);

            //     if (usuarioBusqueda != null) {
            //         console.log('Busqueda exitosa: ', usuarioBusqueda)

            //     } else {
            //         console.log('No se encontró el usuario con el ID especificado.')
            //     }

            //     console.log('---Actualización del usuario con id 1---')

            //     usuarioNuevo = {
            //         nombre: 'LaPiñataLoca',
            //         email: 'lapinataloca@gmail.com',
            //         password: 'piñataparty',
            //         rol: 'Usuario',
            //         calle: 'Calle de los Dulces nuevos',
            //         numerocasa: '789',
            //         colonia: 'Colonia Piñatas',
            //         telefono: '9995558888'
            //     };


            //     const usuarioActualizar = await UsuarioDAO.actualizarUsuario(usuarios[0]._id, usuarioNuevo);

            //     if (usuarioActualizar != null) {
            //         console.log('Usuario actualizado: ', usuarioActualizar)
            //     } else {
            //         console.log('No se pudo actualizar al usuario especificado.')
            //     }

            //     console.log('---Eliminación del segundo usuario de la lista---')

            //     const usuarioEliminar = await UsuarioDAO.eliminarUsuario(usuarios[1]._id);

            //     console.log('Usuario eliminado correctamente: ', usuarioEliminar)
            //     console.log('---> Finalización de pruebas de Usuarios <---');
            // } catch (error) {
            //     throw error;
            // }

            // // Productos
            // try {
            //     console.log('--------Pruebas de ProductosDAO--------')
            //     const producto1 = {
            //         nombre: 'Cafe Organico Tostado 250 gr',
            //         descripcion: 'Presentación de 250 gramos. Cosechado en los altos de la Sierra de Zongolica, de manera artesanal por manos de indígenas nahuatl. Café Tatiaxca de grano arabiga y tueste medio, con gran aroma, cuerpo y acidez. Excelente calidad 100% Orgánico.',
            //         precio: 199.99,
            //         stock: 20,
            //         categoria: 'Cafe en grano',
            //         imagenurl: 'https://example.com/imagen-producto1.jpg'
            //     };
            //     const producto2 = {
            //         nombre: 'Cafe Organico Tostado 500 gr',
            //         descripcion: 'Presentación de 500 gramos. Cosechado en los altos de la Sierra de Zongolica, de manera artesanal por manos de indígenas nahuatl. Café Tatiaxca de grano arabiga y tueste medio, con gran aroma, cuerpo y acidez. Excelente calidad 100% Orgánico.',
            //         precio: 379.99,
            //         stock: 15,
            //         categoria: 'Cafe en grano',
            //         imagenurl: 'https://example.com/imagen-producto2.jpg'
            //     };
            //     const producto3 = {
            //         nombre: 'Cafe Organico Tostado 1 kg',
            //         descripcion: 'Presentación de 1000 gramos. Cosechado en los altos de la Sierra de Zongolica, de manera artesanal por manos de indígenas nahuatl. Café Tatiaxca de grano arabiga y tueste medio, con gran aroma, cuerpo y acidez. Excelente calidad 100% Orgánico.',
            //         precio: 699.99,
            //         stock: 32,
            //         categoria: 'Cafe en grano',
            //         imagenurl: 'https://example.com/imagen-producto3.jpg'
            //     };
            //     const producto4 = {
            //         nombre: 'Cupcakes de chocolate',
            //         descripcion: 'Pack de 12 cupcakes de chocolate con betun de queso crema y rodeado de chispas de chocolate, excelente opcion para compartir en cualquier evento familiar.',
            //         precio: 240,
            //         stock: 12,
            //         categoria: 'Cafe en grano',
            //         imagenurl: 'https://example.com/imagen-producto4.jpg'
            //     };


            //     await ProductoDAO.crearProducto(producto1);
            //     await ProductoDAO.crearProducto(producto2);
            //     await ProductoDAO.crearProducto(producto3);
            //     await ProductoDAO.crearProducto(producto4);

            //     console.log('-> Productos creados correctamente')

            //     console.log('---Busqueda de todos los productos---')
            //     const productos = await ProductoDAO.obtenerProductos();
            //     console.log('Lista de productos: ', productos)

            //     console.log('---Busqueda de producto con id del primer producto---')

            //     const productoBusqueda = await ProductoDAO.obtenerProductoPorID(productos[0]._id);

            //     if (productoBusqueda != null) {
            //         console.log('Busqueda exitosa: ', productoBusqueda)

            //     } else {
            //         console.log('No se encontró el producto con el ID especificado.')
            //     }

            //     console.log('---Actualización del producto 1---')

            //     productoNuevo = {
            //         nombre: 'Cafe Organico Tostado 250 gr',
            //         descripcion: 'Presentación de 250 gr. Cosechado en los altos de la Sierra de Zongolica, de manera artesanal por manos de indígenas nahuatl. Café Tatiaxca de grano arabiga y tueste medio, con gran aroma, cuerpo y acidez. Excelente calidad 100% Orgánico.',
            //         precio: 170,
            //         stock: 35,
            //         categoria: 'Cafe en grano',
            //         imagenurl: 'https://example.com/imagen-producto1.jpg'
            //     };


            //     const productoActualizar = await ProductoDAO.actualizarProducto(productos[0]._id, productoNuevo);

            //     if (productoActualizar != null) {
            //         console.log('Producto actualizado: ', productoActualizar)
            //     } else {
            //         console.log('No se pudo actualizar el producto especificado.')
            //     }

            //     console.log('---Eliminación del 4to producto---')

            //     const productoEliminar = await ProductoDAO.eliminarProducto(productos[3]._id);

            //     console.log('Producto eliminado correctamente: ', productoEliminar)
            //     console.log('---> Finalización de pruebas de Productos <---');
            // } catch (error) {
            //     throw error;
            // }

            // Carrito
            // try {
                // console.log('--------Pruebas de CarritoDAO--------')
                // const carrito1 = {
                //     idUsuario: '5f4e792f4f3c3e4c6c61945a',
                //     productosEnCarrito: [
                //         {
                //             nombre: 'Cafe Organico Tostado 250 gr',
                //             descripcion: 'Presentación de 250 gramos. Cosechado en los altos de la Sierra de Zongolica, de manera artesanal por manos de indígenas nahuatl. Café Tatiaxca de grano arabiga y tueste medio, con gran aroma, cuerpo y acidez. Excelente calidad 100% Orgánico.',
                //             precio: 199.99,
                //             stock: 20,
                //             categoria: 'Cafe en grano',
                //             imagenurl: 'https://example.com/imagen-producto1.jpg'
                //         },
                //         {
                //             nombre: 'Cafe Organico Tostado 500 gr',
                //             descripcion: 'Presentación de 500 gramos. Cosechado en los altos de la Sierra de Zongolica, de manera artesanal por manos de indígenas nahuatl. Café Tatiaxca de grano arabiga y tueste medio, con gran aroma, cuerpo y acidez. Excelente calidad 100% Orgánico.',
                //             precio: 379.99,
                //             stock: 15,
                //             categoria: 'Cafe en grano',
                //             imagenurl: 'https://example.com/imagen-producto2.jpg'
                //         }
                //     ],
                //     total: '300.50'
                // };

                // const carrito2 = {
                //     idUsuario: '609c35cda1ab1b7359f22781',
                //     productosEnCarrito: [
                //         {
                //             nombre: 'Cafe Organico Tostado 250 gr',
                //             descripcion: 'Presentación de 250 gramos. Cosechado en los altos de la Sierra de Zongolica, de manera artesanal por manos de indígenas nahuatl. Café Tatiaxca de grano arabiga y tueste medio, con gran aroma, cuerpo y acidez. Excelente calidad 100% Orgánico.',
                //             precio: 199.99,
                //             stock: 20,
                //             categoria: 'Cafe en grano',
                //             imagenurl: 'https://example.com/imagen-producto1.jpg'
                //         },
                //         {
                //             nombre: 'Cafe Organico Tostado 500 gr',
                //             descripcion: 'Presentación de 500 gramos. Cosechado en los altos de la Sierra de Zongolica, de manera artesanal por manos de indígenas nahuatl. Café Tatiaxca de grano arabiga y tueste medio, con gran aroma, cuerpo y acidez. Excelente calidad 100% Orgánico.',
                //             precio: 379.99,
                //             stock: 15,
                //             categoria: 'Cafe en grano',
                //             imagenurl: 'https://example.com/imagen-producto2.jpg'
                //         },
                //         {
                //             nombre: 'Cafe Organico Tostado 1 kg',
                //             descripcion: 'Presentación de 1000 gramos. Cosechado en los altos de la Sierra de Zongolica, de manera artesanal por manos de indígenas nahuatl. Café Tatiaxca de grano arabiga y tueste medio, con gran aroma, cuerpo y acidez. Excelente calidad 100% Orgánico.',
                //             precio: 699.99,
                //             stock: 32,
                //             categoria: 'Cafe en grano',
                //             imagenurl: 'https://example.com/imagen-producto3.jpg'
                //         }
                //     ],
                //     total: '250.50'
                // };

                // const carrito3 = {
                //     idUsuario: '609c35cda1ab1b7359f22781',
                //     productosEnCarrito: [
                //         {
                //             nombre: 'Cafe Organico Tostado 250 gr',
                //             descripcion: 'Presentación de 250 gramos. Cosechado en los altos de la Sierra de Zongolica, de manera artesanal por manos de indígenas nahuatl. Café Tatiaxca de grano arabiga y tueste medio, con gran aroma, cuerpo y acidez. Excelente calidad 100% Orgánico.',
                //             precio: 199.99,
                //             stock: 20,
                //             categoria: 'Cafe en grano',
                //             imagenurl: 'https://example.com/imagen-producto1.jpg'
                //         },
                //         {
                //             nombre: 'Cafe Organico Tostado 500 gr',
                //             descripcion: 'Presentación de 500 gramos. Cosechado en los altos de la Sierra de Zongolica, de manera artesanal por manos de indígenas nahuatl. Café Tatiaxca de grano arabiga y tueste medio, con gran aroma, cuerpo y acidez. Excelente calidad 100% Orgánico.',
                //             precio: 379.99,
                //             stock: 15,
                //             categoria: 'Cafe en grano',
                //             imagenurl: 'https://example.com/imagen-producto2.jpg'
                //         },
                //         {
                //             nombre: 'Cafe Organico Tostado 1 kg',
                //             descripcion: 'Presentación de 1000 gramos. Cosechado en los altos de la Sierra de Zongolica, de manera artesanal por manos de indígenas nahuatl. Café Tatiaxca de grano arabiga y tueste medio, con gran aroma, cuerpo y acidez. Excelente calidad 100% Orgánico.',
                //             precio: 699.99,
                //             stock: 32,
                //             categoria: 'Cafe en grano',
                //             imagenurl: 'https://example.com/imagen-producto3.jpg'
                //         },
                //         {
                //             nombre: 'Cupcakes de chocolate',
                //             descripcion: 'Pack de 12 cupcakes de chocolate con betun de queso crema y rodeado de chispas de chocolate, excelente opcion para compartir en cualquier evento familiar.',
                //             precio: 240,
                //             stock: 12,
                //             categoria: 'Cafe en grano',
                //             imagenurl: 'https://example.com/imagen-producto4.jpg'
                //         }
                //     ],
                //     total: '699.90'
                // };

                // await CarritoDAO.crearCarrito(carrito1)
                // await CarritoDAO.crearCarrito(carrito2)
                // await CarritoDAO.crearCarrito(carrito3)

                // console.log('-> Carrito creados correctamente')

            //     console.log('---Busqueda de todos los carritos---')
                // const carritos = await CarritoDAO.obtenerCarritos();
            //     console.log('Lista de carritos: ', carritos)

            //     console.log('---Busqueda de carrito con id del primer producto---')

            //     const carritoBusqueda = await CarritoDAO.obtenerCarritosPorId(carritos[0]._id);

            //     if (carritoBusqueda != null) {
            //         console.log('Busqueda exitosa: ', carritoBusqueda)

            //     } else {
            //         console.log('No se encontró el carrito con el ID especificado.')
            //     }

            //     console.log('---Actualización del carrito con id 1---')
            //     carritoNuevo = {
            //         idUsuario: '609c35cda1ab1b7359f22781',
            //         productosEnCarrito: [
            //             {
            //                 nombre: 'Cafe Organico Tostado 250 gr',
            //                 descripcion: 'Presentación de 250 gramos. Cosechado en los altos de la Sierra de Zongolica, de manera artesanal por manos de indígenas nahuatl. Café Tatiaxca de grano arabiga y tueste medio, con gran aroma, cuerpo y acidez. Excelente calidad 100% Orgánico.',
            //                 precio: 199.99,
            //                 stock: 20,
            //                 categoria: 'Cafe en grano',
            //                 imagenurl: 'https://example.com/imagen-producto1.jpg'
            //             }
            //         ],
            //         total: '100'
            // };

            // const carritoActualizar = await CarritoDAO.actualizarCarrito(carritos[0]._id, carritoNuevo);

            // if (carritoActualizar != null) {
            //     console.log('Carrito actualizado: ', carritoActualizar)
            // } else {
            //     console.log('No se pudo actualizar al carrito especificado.')
            // }

        //         console.log('---Eliminación del primer carrito de la lista---')

        //         const carritoEliminar = await CarritoDAO.eliminarCarrito(carritos[0]._id);

        //         console.log('Carrito eliminado correctamente: ', carritoEliminar)
        //     console.log('---> Finalización de pruebas de Carrito <---');
        // } catch (error) {
        //     throw error;
        // }

        // Administradores
            try {
                console.log('--------Pruebas de AdministradorDAO--------')
                // const admin1 = {
                //     nombre: 'LaPiñataLocaAdmin',
                //     email: 'lapinatalocaadmin@gmail.com',
                //     password: 'piñataparty',
                //     rol: 'admin'
                // };

                // const admin2 = {
                //     nombre: 'ElTacoLocoAdmin',
                //     email: 'eltacolocoadmin@gmail.com',
                //     password: 'tacotac0',
                //     rol: 'admin'
                // };

                // const admin3 = {
                //     nombre: 'LaChalupaFiestaAdmin',
                //     email: 'lachalupafiestaadmin@gmail.com',
                //     password: 'fiesta2023',
                //     rol: 'superadmin'
                // };

                // await AdministradorDAO.crearAdministrador(admin1);
                // await AdministradorDAO.crearAdministrador(admin2);
                // await AdministradorDAO.crearAdministrador(admin3);

                // console.log('-> Administradores creados correctamente')

                // console.log('---Busqueda de todos los administradores---')
                const administradores = await AdministradorDAO.obtenerAdministradores();
                // console.log('Lista de administradores: ', administradores)

                // console.log('---Busqueda de admin con id del primer producto---')
                // const adminBusqueda = await AdministradorDAO.obtenerAdministradorPorID(administradores[0]._id);

                // if (adminBusqueda != null) {
                //     console.log('Busqueda exitosa: ', adminBusqueda)

                // } else {
                //     console.log('No se encontró el admin con el ID especificado.')
                // }

                // console.log('---Actualización del admin con id 1---')

                // adminNuevo = {
                //     nombre: 'LaPiñataLocaNueva',
                //     email: 'lapinataloca777admin@gmail.com',
                //     password: 'piñataparty321',
                //     rol: 'superadmin'
                // };

                // const adminActualizado = await AdministradorDAO.actualizarAdministrador(administradores[0]._id, adminNuevo);

                // if (adminActualizado != null) {
                //     console.log('Administrador actualizado: ', adminActualizado)
                // } else {
                //     console.log('No se pudo actualizar al administrador especificado.')
                // }

                console.log('---Eliminación del primer admin de la lista---')

                const adminEliminar = await AdministradorDAO.eliminarAdministrador(administradores[0]._id);

                console.log('Administrador eliminado correctamente: ', adminEliminar)
                console.log('---> Finalización de pruebas de Administrador <---');
            } catch (error) {
                throw error;
            }

        db.desconectar();
    } catch (error) {
        console.error('Error en las pruebas:', error);
    }
        }).catch (err => {
    console.error('Error en la conexión a la base de datos:', err);
})