import Notificacion from "../models/Notificacion.js";

const findAll = async () => {
    return await Notificacion.findAll();
};

const findById = async (id) => {
    return await Notificacion.findByPk(id);
};

const create = async (notificacion) => {
    return await Notificacion.create(notificacion);
};

const update = async (id, notificacion) => {
    const [updated] = await Notificacion.update(notificacion, {
        where: { idNotificacion: id },
    });
    return updated > 0; // Devuelve true si se actualizó
};

const remove = async (id) => {
    const deleted = await Notificacion.destroy({
        where: { idNotificacion: id },
    });
    return deleted > 0; // Devuelve true si se eliminó
};

export default { findAll, findById, create, update, remove };
