
import { app, connectDB } from './app';
const PORT = process.env.PORT || 5000;

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
