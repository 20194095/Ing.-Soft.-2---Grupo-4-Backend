import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Contrato = sequelize.define(
  "Contrato",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    empresa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipoContrato: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fechaPublicacion: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    producto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "contratos",
    timestamps: false,
  }
);

export default Contrato;
