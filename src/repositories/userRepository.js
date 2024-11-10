import pool from '../config/database.js';

const findAll = async () => {
    const { rows } = await pool.query('SELECT * FROM usuarios');
    return rows;
};

const findById = async (id) => {
    const { rows } = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);
    return rows[0];
};

const create = async (usuario) => {
    const { nombreUsuario, correo, contraseña, rolId, autenticacionDosFactores } = usuario;
    const { rows } = await pool.query(
        'INSERT INTO usuarios (nombre_usuario, correo, contraseña, rol_id, autenticacion_dos_factores) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [nombreUsuario, correo, contraseña, rolId, autenticacionDosFactores]
    );
    return rows[0];
};

const update = async (id, usuario) => {
    const { nombreUsuario, correo, contraseña, rolId, autenticacionDosFactores } = usuario;
    const { rowCount } = await pool.query(
        'UPDATE usuarios SET nombre_usuario = $1, correo = $2, contraseña = $3, rol_id = $4, autenticacion_dos_factores = $5 WHERE id = $6',
        [nombreUsuario, correo, contraseña, rolId, autenticacionDosFactores, id]
    );
    return rowCount > 0;
};

const remove = async (id) => {
    const { rowCount } = await pool.query('DELETE FROM usuarios WHERE id = $1', [id]);
    return rowCount > 0;
};

export default { findAll, findById, create, update, remove };
