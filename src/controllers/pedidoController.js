import pedidoRepository from "../repositories/pedidoRepository.js";

const getAllPedidos = async (req, res) => {
    try {
        const pedidos = await pedidoRepository.findAll();
        res.status(200).json(pedidos);
    } catch (error) {
        res.status(500).json({ message: "Error fetching pedidos", error: error.message });
    }
};

const getPedidoById = async (req, res) => {
    try {
        const pedido = await pedidoRepository.findById(req.params.id);
        if (pedido) {
            res.status(200).json(pedido);
        } else {
            res.status(404).json({ message: "Pedido not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error fetching pedido", error: error.message });
    }
};

const createPedido = async (req, res) => {
    try {
        const newPedido = req.body;
        const createdPedido = await pedidoRepository.create(newPedido);
        res.status(201).json(createdPedido);
    } catch (error) {
        res.status(500).json({ message: "Error creating pedido", error: error.message });
    }
};

const updatePedido = async (req, res) => {
    try {
        const updatedPedido = req.body;
        const success = await pedidoRepository.update(req.params.id, updatedPedido);
        if (success) {
            res.status(200).json({ message: "Pedido updated successfully" });
        } else {
            res.status(404).json({ message: "Pedido not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating pedido", error: error.message });
    }
};

const deletePedido = async (req, res) => {
    try {
        const success = await pedidoRepository.remove(req.params.id);
        if (success) {
            res.status(200).json({ message: "Pedido deleted successfully" });
        } else {
            res.status(404).json({ message: "Pedido not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting pedido", error: error.message });
    }
};

export default { getAllPedidos, getPedidoById, createPedido, updatePedido, deletePedido };
