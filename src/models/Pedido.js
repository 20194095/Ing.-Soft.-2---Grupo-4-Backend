import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Comprador from "./Comprador.js";

const Pedido = sequelize.define(
    "Pedido",
    {
        idPedido: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false, // Ejemplo: "Pendiente", "En proceso", "Completado"
        },
        compradorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Comprador,
                key: "idUsuario",
            },
        },
    },
    {
        tableName: "pedidos",
        timestamps: false,
    }
);

export default Pedido;
