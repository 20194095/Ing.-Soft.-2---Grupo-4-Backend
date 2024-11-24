import express from "express";
const router = express.Router();

const storage = {}; // Almacén en memoria como ejemplo. Cambiar a base de datos en producción

// Ruta para obtener datos
router.get("/storage/:clave", (req, res) => {
  const { clave } = req.params;
  if (storage[clave]) {
    res.status(200).json(storage[clave]); // Devuelve los datos asociados a la clave
  } else {
    res.status(404).json({ message: "Clave no encontrada" }); // Devuelve un error si no se encuentra la clave
  }
});

// Ruta para guardar datos
router.post("/storage/:clave", (req, res) => {
  const { clave } = req.params;
  const { valor } = req.body;
  storage[clave] = valor; // Almacena los datos en memoria
  res.status(201).json({ message: "Datos guardados con éxito" }); // Confirma la operación
});

export default router;
