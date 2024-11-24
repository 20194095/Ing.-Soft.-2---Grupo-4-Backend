import Usuario from "./Usuario.js";

const Comprador = Usuario.scope({ where: { tipoUsuario: "Comprador" } });

export default Comprador;
