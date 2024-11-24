import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Producto = sequelize.define(
    "Producto",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        categoria: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "productos", // Nombre de la tabla en la base de datos
        timestamps: false, // No agregar createdAt/updatedAt
    }
);

export default Producto;
