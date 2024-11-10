import orderRepository from '../repositories/orderRepository.js';

const getAllOrders = async (req, res) => {
    try {
        const orders = await orderRepository.findAll();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error: error.message });
    }
};

const getOrderById = async (req, res) => {
    try {
        const order = await orderRepository.findById(req.params.id);
        if (order) {
            res.status(200).json(order);
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching order', error: error.message });
    }
};

const createOrder = async (req, res) => {
    try {
        const newOrder = req.body;
        const createdOrder = await orderRepository.create(newOrder);
        res.status(201).json(createdOrder);
    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error: error.message });
    }
};

const updateOrder = async (req, res) => {
    try {
        const updatedOrder = req.body;
        const success = await orderRepository.update(req.params.id, updatedOrder);
        if (success) {
            res.status(200).json({ message: 'Order updated successfully' });
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating order', error: error.message });
    }
};

const deleteOrder = async (req, res) => {
    try {
        const success = await orderRepository.remove(req.params.id);
        if (success) {
            res.status(200).json({ message: 'Order deleted successfully' });
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting order', error: error.message });
    }
};

export default { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder };
