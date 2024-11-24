import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Usuario = sequelize.define(
    "Usuario",
    {
        idUsuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tipoUsuario: {
            type: DataTypes.STRING,
            allowNull: false, // Puede ser "Comprador" o "Vendedor"
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        contrasena: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "usuarios",
        timestamps: false,
    }
);

export default Usuario;
