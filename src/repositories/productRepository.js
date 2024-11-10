import pool from '../config/database.js';

const findAll = async () => {
    const { rows } = await pool.query('SELECT * FROM productos');
    return rows;
};

const findById = async (id) => {
    const { rows } = await pool.query('SELECT * FROM productos WHERE id = $1', [id]);
    return rows[0];
};

const create = async (product) => {
    const { nombre, descripcion, precio, cantidadDisponible, categoria } = product;
    const { rows } = await pool.query(
        'INSERT INTO productos (nombre, descripcion, precio, cantidad_disponible, categoria) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [nombre, descripcion, precio, cantidadDisponible, categoria]
    );
    return rows[0];
};

const update = async (id, product) => {
    const { nombre, descripcion, precio, cantidadDisponible, categoria } = product;
    const { rowCount } = await pool.query(
        'UPDATE productos SET nombre = $1, descripcion = $2, precio = $3, cantidad_disponible = $4, categoria = $5 WHERE id = $6',
        [nombre, descripcion, precio, cantidadDisponible, categoria, id]
    );
    return rowCount > 0;
};

const remove = async (id) => {
    const { rowCount } = await pool.query('DELETE FROM productos WHERE id = $1', [id]);
    return rowCount > 0;
};

export default { findAll, findById, create, update, remove };
