
import { app, connectDB } from './app';
import config from './app.config';
const PORT = config.port || 5000;

const startServer = async () => {
  await connectDB();
  // Prueba local//
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
  /////////////////
};

startServer();

export default app;
