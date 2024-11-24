import ticketSoporteRepository from "../repositories/ticketSoporteRepository.js";

const getAllTickets = async (req, res) => {
    try {
        const tickets = await ticketSoporteRepository.findAll();
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({ message: "Error fetching tickets", error: error.message });
    }
};

const getTicketById = async (req, res) => {
    try {
        const ticket = await ticketSoporteRepository.findById(req.params.id);
        if (ticket) {
            res.status(200).json(ticket);
        } else {
            res.status(404).json({ message: "Ticket not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error fetching ticket", error: error.message });
    }
};

const createTicket = async (req, res) => {
    try {
        const newTicket = req.body;
        const createdTicket = await ticketSoporteRepository.create(newTicket);
        res.status(201).json(createdTicket);
    } catch (error) {
        res.status(500).json({ message: "Error creating ticket", error: error.message });
    }
};

const updateTicket = async (req, res) => {
    try {
        const updatedTicket = req.body;
        const success = await ticketSoporteRepository.update(req.params.id, updatedTicket);
        if (success) {
            res.status(200).json({ message: "Ticket updated successfully" });
        } else {
            res.status(404).json({ message: "Ticket not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating ticket", error: error.message });
    }
};

const deleteTicket = async (req, res) => {
    try {
        const success = await ticketSoporteRepository.remove(req.params.id);
        if (success) {
            res.status(200).json({ message: "Ticket deleted successfully" });
        } else {
            res.status(404).json({ message: "Ticket not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting ticket", error: error.message });
    }
};

export default { getAllTickets, getTicketById, createTicket, updateTicket, deleteTicket };
