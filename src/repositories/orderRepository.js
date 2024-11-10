import pool from '../config/database.js';

const findAll = async () => {
    const { rows } = await pool.query('SELECT * FROM pedidos');
    return rows;
};

const findById = async (id) => {
    const { rows } = await pool.query('SELECT * FROM pedidos WHERE id = $1', [id]);
    return rows[0];
};

const create = async (order) => {
    const { compradorId, fechaEmision, fechaEntrega, estado, detalles } = order;
    const { rows } = await pool.query(
        'INSERT INTO pedidos (comprador_id, fecha_emision, fecha_entrega, estado, detalles) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [compradorId, fechaEmision, fechaEntrega, estado, detalles]
    );
    return rows[0];
};

const update = async (id, order) => {
    const { compradorId, fechaEmision, fechaEntrega, estado, detalles } = order;
    const { rowCount } = await pool.query(
        'UPDATE pedidos SET comprador_id = $1, fecha_emision = $2, fecha_entrega = $3, estado = $4, detalles = $5 WHERE id = $6',
        [compradorId, fechaEmision, fechaEntrega, estado, detalles, id]
    );
    return rowCount > 0;
};

const remove = async (id) => {
    const { rowCount } = await pool.query('DELETE FROM pedidos WHERE id = $1', [id]);
    return rowCount > 0;
};

export default { findAll, findById, create, update, remove };
