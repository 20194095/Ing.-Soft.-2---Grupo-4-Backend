import Sequelize from "sequelize";

const hostname = 'localhost';
const username = 'postgres';
const password = 'kolasito21';
const database = 'matricula2024';
const port = 5432;
const dialect = 'postgres';

const sequelize = new Sequelize(database, username, password, {
    host: hostname,
    port: port,
    dialect: dialect,
    logging: false, // Desactiva logs de Sequelize
});

export default sequelize;
