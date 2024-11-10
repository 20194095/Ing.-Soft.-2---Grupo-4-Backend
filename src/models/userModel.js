class Usuario {
    constructor(id, nombreUsuario, correo, contraseña, rolId, autenticacionDosFactores, fechaRegistro) {
        this.id = id;
        this.nombreUsuario = nombreUsuario;
        this.correo = correo;
        this.contraseña = contraseña;
        this.rolId = rolId;
        this.autenticacionDosFactores = autenticacionDosFactores;
        this.fechaRegistro = fechaRegistro;
    }
}

export default Usuario;
