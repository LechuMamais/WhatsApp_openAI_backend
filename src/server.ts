/*import { app, connectDB } from './app';

const PORT = process.env.PORT;

const startServer = async () => {

  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();*/

import { app, connectDB } from './app';

const startServer = async () => {
  await connectDB();
};

// Ejecuta la función sin iniciar el servidor con `listen`
startServer();

export default app; // Exporta la app para que Vercel la maneje
