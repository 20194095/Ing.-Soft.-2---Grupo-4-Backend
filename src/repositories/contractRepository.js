import pool from '../config/database.js';

const findAll = async () => {
    const { rows } = await pool.query('SELECT * FROM contratos');
    return rows;
};

const findById = async (id) => {
    const { rows } = await pool.query('SELECT * FROM contratos WHERE id = $1', [id]);
    return rows[0];
};

const create = async (contract) => {
    const { pedidoId, vendedorId, condiciones, estado } = contract;
    const { rows } = await pool.query(
        'INSERT INTO contratos (pedido_id, vendedor_id, condiciones, estado) VALUES ($1, $2, $3, $4) RETURNING *',
        [pedidoId, vendedorId, condiciones, estado]
    );
    return rows[0];
};

const update = async (id, contract) => {
    const { pedidoId, vendedorId, condiciones, estado } = contract;
    const { rowCount } = await pool.query(
        'UPDATE contratos SET pedido_id = $1, vendedor_id = $2, condiciones = $3, estado = $4 WHERE id = $5',
        [pedidoId, vendedorId, condiciones, estado, id]
    );
    return rowCount > 0;
};

const remove = async (id) => {
    const { rowCount } = await pool.query('DELETE FROM contratos WHERE id = $1', [id]);
    return rowCount > 0;
};

export default { findAll, findById, create, update, remove };
