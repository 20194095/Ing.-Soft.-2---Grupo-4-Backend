/*
-- Crear la tabla de Roles
CREATE TABLE IF NOT EXISTS roles (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

-- Crear la tabla de Usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nombre_usuario VARCHAR(50) UNIQUE NOT NULL,
    correo VARCHAR(100) UNIQUE NOT NULL,
    contraseña VARCHAR(100) NOT NULL,
    rol_id INTEGER REFERENCES roles(id),
    autenticacion_dos_factores BOOLEAN DEFAULT FALSE,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear la tabla de Proveedores
CREATE TABLE IF NOT EXISTS proveedores (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES usuarios(id) UNIQUE,
    notificaciones TEXT
);

-- Crear la tabla de Empresas
CREATE TABLE IF NOT EXISTS empresas (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES usuarios(id) UNIQUE,
    cantidad_participantes INTEGER DEFAULT 0
);

-- Crear la tabla de Productos
CREATE TABLE IF NOT EXISTS productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio NUMERIC(10, 2) NOT NULL,
    cantidad_disponible INTEGER,
    categoria VARCHAR(100)
);

-- Crear la tabla de Pedidos
CREATE TABLE IF NOT EXISTS pedidos (
    id SERIAL PRIMARY KEY,
    comprador_id INTEGER REFERENCES usuarios(id),
    fecha_emision TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_entrega TIMESTAMP,
    estado VARCHAR(50) DEFAULT 'pendiente',
    detalles TEXT
);

-- Crear la tabla de Contratos
CREATE TABLE IF NOT EXISTS contratos (
    id SERIAL PRIMARY KEY,
    pedido_id INTEGER REFERENCES pedidos(id),
    vendedor_id INTEGER REFERENCES usuarios(id),
    fecha_firma TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    condiciones TEXT NOT NULL,
    estado VARCHAR(50) DEFAULT 'activo'
);

-- Crear la tabla de Participaciones en Contratos
CREATE TABLE IF NOT EXISTS participaciones_contratos (
    id SERIAL PRIMARY KEY,
    contrato_id INTEGER REFERENCES contratos(id),
    vendedor_id INTEGER REFERENCES usuarios(id),
    fecha_participacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

*/
