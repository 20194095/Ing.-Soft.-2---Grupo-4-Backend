import Usuario from "./Usuario.js";

const Vendedor = Usuario.scope({ where: { tipoUsuario: "Vendedor" } });

export default Vendedor;
