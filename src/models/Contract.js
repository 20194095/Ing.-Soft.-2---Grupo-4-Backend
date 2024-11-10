class Contract {
    constructor(id, pedidoId, vendedorId, condiciones, estado) {
        this.id = id;
        this.pedidoId = pedidoId;
        this.vendedorId = vendedorId;
        this.condiciones = condiciones;
        this.estado = estado;
    }
}

export default Contract;
