import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import pedidoRoutes from "./src/routes/pedidoRoutes.js";
import productRoutes from "./src/routes/productRoutes.js";
import contractRoutes from "./src/routes/contractRoutes.js";
import notificationRoutes from "./src/routes/notificationRoutes.js";
import ticketSoporteRoutes from "./src/routes/ticketSoporteRoutes.js";
import categoriasRouter from "./src/routes/categoriasRoutes.js";


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/productos", productRoutes);
app.use("/contratos", contractRoutes);
app.use("/notificaciones", notificationRoutes);
app.use("/tickets", ticketSoporteRoutes);
app.use("/pedidos", pedidoRoutes);
app.use("/categorias", categoriasRouter);

export default app;
