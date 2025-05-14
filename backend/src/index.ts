import express from 'express';
import { PrismaClient } from '@prisma/client';
import adminRoutes from './routes/admin';
import publicRoutes from './routes/public';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use('/admin', adminRoutes);
app.use('/public', publicRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});