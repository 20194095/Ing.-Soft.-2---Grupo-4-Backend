import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const TicketSoporte = sequelize.define(
    "TicketSoporte",
    {
        idTicket: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tipoProblema: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ayudaPresencial: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "tickets_soporte", // Nombre de la tabla en la base de datos
        timestamps: false, // No agregar createdAt/updatedAt
    }
);

export default TicketSoporte;
