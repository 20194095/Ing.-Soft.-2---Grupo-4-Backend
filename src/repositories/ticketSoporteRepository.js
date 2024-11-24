import TicketSoporte from "../models/TicketSoporte.js";

const findAll = async () => {
    return await TicketSoporte.findAll();
};

const findById = async (id) => {
    return await TicketSoporte.findByPk(id);
};

const create = async (ticket) => {
    return await TicketSoporte.create(ticket);
};

const update = async (id, ticket) => {
    const [updated] = await TicketSoporte.update(ticket, {
        where: { idTicket: id },
    });
    return updated > 0; // Devuelve true si se actualizó
};

const remove = async (id) => {
    const deleted = await TicketSoporte.destroy({
        where: { idTicket: id },
    });
    return deleted > 0; // Devuelve true si se eliminó
};

export default { findAll, findById, create, update, remove };
