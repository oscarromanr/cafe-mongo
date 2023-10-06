# Acceso a Datos -- MongoDB
## Desarrollo de la capa de datos del proyecto de Temas Emergentes de Aplicaciones Web - ITSON.

Orden:

- idOrden (identificador único de la orden)
- idUsuario (identificador del usuario que realizó la orden)
- fechaOrden (fecha y hora de la orden)
- estado (estado de la orden, por ejemplo, 'pendiente', 'completada', 'cancelada')
- total (monto total de la orden)
- productos (lista de productos incluidos en la orden)
- direcciónEnvío (dirección de envío para la orden)
- métodoPago (método de pago utilizado para la orden)

Administrador:

- idAdministrador (identificador único del administrador)
- nombre (nombre del administrador)
- correoElectrónico (correo electrónico del administrador)
- contraseña (contraseña hash para la autenticación)
- rol (rol del administrador, por ejemplo, 'superadmin' o 'admin')

Usuario:

- idUsuario (identificador único del usuario)
- nombre (nombre del usuario)
- correoElectrónico (correo electrónico del usuario)
- contraseña (contraseña hash para la autenticación)
- rol (rol del usuario, por ejemplo, 'cliente' o 'administrador')

Producto:

- idProducto (identificador único del producto)
- nombre (nombre del producto)
- descripción (descripción del producto)
- precio (precio del producto)
- stock (cantidad disponible en stock)

Carrito:

- idCarrito (identificador único del carrito de compras)
- idUsuario (identificador del usuario dueño del carrito)
- productosEnCarrito (lista de productos agregados al carrito)
- total (monto total de los productos en el carrito)

Pago:

- idPago (identificador único)
- idUsuario (identificador del usuario que realiza el pago)
- monto (monto total de la compra)
- metodoPago (método de pago utilizado, por ejemplo, 'tarjeta de crédito')
- fechaPago (fecha y hora en que se realizó el pago)



### - Miguel Ángel de la Rosa Martinez
### - Josue Emmanuel Flores Carballo
### - Oscar de Jesús Roman Ruíz
