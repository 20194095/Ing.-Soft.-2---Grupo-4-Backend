import Producto from "../models/product.js";

const findAll = async () => {
    return await Producto.findAll();
};

const findById = async (id) => {
    return await Producto.findByPk(id);
};

const create = async (producto) => {
    return await Producto.create(producto);
};

const update = async (id, producto) => {
    const [updated] = await Producto.update(producto, {
        where: { id },
    });
    return updated > 0; // Devuelve true si se actualizó
};

const remove = async (id) => {
    const deleted = await Producto.destroy({
        where: { id },
    });
    return deleted > 0; // Devuelve true si se eliminó
};

export default { findAll, findById, create, update, remove };
