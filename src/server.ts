import { app, connectDB } from './app';

const PORT = process.env.PORT || 5000;

// Start the server
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
