import express from "express";
import pedidoController from "../controllers/pedidoController.js";

const router = express.Router();

router.get("/", pedidoController.getAllPedidos);
router.get("/:id", pedidoController.getPedidoById);
router.post("/", pedidoController.createPedido);
router.put("/:id", pedidoController.updatePedido);
router.delete("/:id", pedidoController.deletePedido);

export default router;
