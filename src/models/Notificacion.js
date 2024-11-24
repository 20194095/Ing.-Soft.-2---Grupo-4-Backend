import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Notificacion = sequelize.define(
    "Notificacion",
    {
        idNotificacion: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        mensaje: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        receptor: {
            type: DataTypes.STRING, // Puede ser un ID de usuario si existe una relación
            allowNull: false,
        },
        leido: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        tableName: "notificaciones", // Nombre de la tabla en la base de datos
        timestamps: false, // No agregar createdAt/updatedAt
    }
);

export default Notificacion;
