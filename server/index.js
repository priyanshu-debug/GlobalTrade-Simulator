import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';

import dashboardRoutes from './routes/dashboard.js';
import benchmarkRoutes from './routes/benchmark.js';
import connectDB from './config/db.js';

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/benchmark', benchmarkRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'GlobalTrade Simulator API is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
