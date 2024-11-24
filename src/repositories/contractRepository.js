import Contrato from "../models/Contrato.js";

const contractRepository = {
  findAll: async () => {
    return await Contrato.findAll();
  },

  findById: async (id) => {
    return await Contrato.findByPk(id);
  },

  create: async (contractData) => {
    return await Contrato.create(contractData);
  },

  update: async (id, contractData) => {
    const [updated] = await Contrato.update(contractData, { where: { id } });
    return updated > 0; // Retorna true si se actualizó
  },

  remove: async (id) => {
    const deleted = await Contrato.destroy({ where: { id } });
    return deleted > 0; // Retorna true si se eliminó
  },
};

export default contractRepository;

