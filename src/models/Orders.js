class Order {
    constructor(id, compradorId, fechaEmision, fechaEntrega, estado, detalles) {
        this.id = id;
        this.compradorId = compradorId;
        this.fechaEmision = fechaEmision;
        this.fechaEntrega = fechaEntrega;
        this.estado = estado;
        this.detalles = detalles;
    }
}

export default Order;
