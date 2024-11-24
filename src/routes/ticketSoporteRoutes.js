import express from "express";
import ticketSoporteController from "../controllers/ticketSoporteController.js";

const router = express.Router();

router.get("/", ticketSoporteController.getAllTickets);
router.get("/:id", ticketSoporteController.getTicketById);
router.post("/", ticketSoporteController.createTicket);
router.put("/:id", ticketSoporteController.updateTicket);
router.delete("/:id", ticketSoporteController.deleteTicket);

export default router;
