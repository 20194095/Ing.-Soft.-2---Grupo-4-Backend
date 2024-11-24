import Usuario from "./Usuario.js";
import Pedido from "./Pedido.js";

// Relaciones
Usuario.hasMany(Pedido, { foreignKey: "compradorId", as: "pedidos" });
Pedido.belongsTo(Usuario, { foreignKey: "compradorId", as: "comprador" });

export { Usuario, Pedido };
