import Pedido from "../models/Pedido.js";

const findAll = async () => {
    return await Pedido.findAll({ include: "comprador" });
};

const findById = async (id) => {
    return await Pedido.findByPk(id, { include: "comprador" });
};

const create = async (pedido) => {
    return await Pedido.create(pedido);
};

const update = async (id, pedido) => {
    const [updated] = await Pedido.update(pedido, {
        where: { idPedido: id },
    });
    return updated > 0;
};

const remove = async (id) => {
    const deleted = await Pedido.destroy({
        where: { idPedido: id },
    });
    return deleted > 0;
};

export default { findAll, findById, create, update, remove };
