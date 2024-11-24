import contractRepository from "../repositories/contractRepository.js";

const contractController = {
    getAllContracts: async (req, res) => {
        try {
          const contracts = await contractRepository.findAll();
      
          // Validar que contracts sea un array
          if (!Array.isArray(contracts)) {
            console.error("La base de datos devolvió datos no válidos:", contracts);
            return res.status(500).json({ message: "Datos no válidos del servidor" });
          }
      
          res.status(200).json(contracts);
        } catch (error) {
          res.status(500).json({ message: "Error al obtener contratos", error: error.message });
        }
      },

  getContractById: async (req, res) => {
    try {
      const contract = await contractRepository.findById(req.params.id);
      if (contract) {
        res.status(200).json(contract);
      } else {
        res.status(404).json({ message: "Contrato no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error al obtener contrato", error: error.message });
    }
  },

  createContract: async (req, res) => {
    try {
      const newContract = await contractRepository.create(req.body);
      res.status(201).json(newContract);
    } catch (error) {
      res.status(500).json({ message: "Error al crear contrato", error: error.message });
    }
  },

  updateContract: async (req, res) => {
    try {
      const success = await contractRepository.update(req.params.id, req.body);
      if (success) {
        res.status(200).json({ message: "Contrato actualizado correctamente" });
      } else {
        res.status(404).json({ message: "Contrato no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar contrato", error: error.message });
    }
  },

  deleteContract: async (req, res) => {
    try {
      const success = await contractRepository.remove(req.params.id);
      if (success) {
        res.status(200).json({ message: "Contrato eliminado correctamente" });
      } else {
        res.status(404).json({ message: "Contrato no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar contrato", error: error.message });
    }
  },
};

export default contractController;

