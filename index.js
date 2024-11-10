import express from 'express';
import usuarioRoutes from './src/routes/usuarioRoutes.js';
import contractRoutes from './src/routes/contractRoutes.js';
import orderRoutes from './src/routes/orderRoutes.js';
import productRoutes from './src/routes/productRoutes.js'; // Importa las rutas de productos

const app = express();

app.use(express.json());
app.use('/usuarios', usuarioRoutes);
app.use('/contratos', contractRoutes);
app.use('/pedidos', orderRoutes);
app.use('/productos', productRoutes); // Agrega la ruta de productos

const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
