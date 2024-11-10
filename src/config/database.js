import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres', // Asegúrate de usar tu usuario correcto
    host: 'localhost', // Cambia si es necesario
    database: 'matricula2024', // Cambia si tu base de datos es diferente
    password: 'kolasito21', // Cambia por tu contraseña
    port: 5432, // Cambia si tu puerto es diferente
});

export default pool;
