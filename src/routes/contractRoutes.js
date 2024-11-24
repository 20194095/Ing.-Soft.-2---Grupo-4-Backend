import express from "express";
import contractController from "../controllers/contractController.js";
import categoriasRouter from "./categoriasRoutes.js";

const router = express.Router();

// Rutas para contratos
router.get("/contratos", contractController.getAllContracts);
router.get("/contratos/:id", contractController.getContractById);
router.post("/contratos", contractController.createContract);
router.put("/contratos/:id", contractController.updateContract);
router.delete("/contratos/:id", contractController.deleteContract);

// Rutas para categorías
router.use("/categorias", categoriasRouter);

export default router;
