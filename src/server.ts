
import { app, connectDB } from './app';
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  // Prueba local//
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
  /////////////////
};

// Ejecuta la función sin iniciar el servidor con `listen`
startServer();

export default app;
