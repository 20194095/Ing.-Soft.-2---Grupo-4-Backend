import express from "express";

const categoriasRouter = express.Router();

// Datos estáticos para las categorías y productos (pueden ser cargados de una base de datos en el futuro)
const categorias = {
  vegetales: ["Papa", "Quinua", "Trigo"],
  granos: ["Maiz", "Arroz", "Algodon"],
  frutas: ["Kiwicha", "Canihua"],
};

// Endpoint para obtener las categorías y sus productos
categoriasRouter.get("/", (req, res) => {
  try {
    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las categorías", error: error.message });
  }
});

export default categoriasRouter;
