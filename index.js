import app from "./app.js";
import sequelize from "./src/config/database.js";

async function main() {
    try {
        const init = process.argv[2];

        if (init) {
            await sequelize.sync({ force: true });
        } else {
            await sequelize.sync({ alter: true });
        }

        console.log("Base de datos sincronizada correctamente.");

        const PORT = 4001;
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
        });
    } catch (error) {
        console.error("Error al iniciar la aplicación:", error);
    }
}

main();
