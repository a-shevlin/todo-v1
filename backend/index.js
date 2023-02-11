import cookieParser from 'cookie-parser';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';

import allRoutes from './routes/index.js';

const PORT = process.env.PORT || 8000;
const app = express();

// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(cookieParser());

// routes
app.use('/api', allRoutes);

// mongoose connection
const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.DB_CONNECTION);
    console.log('Connected to database');
  }
  catch(err) {
    console.log("connection failed: ", err);
    process.exit(1);
  }
};

// express server start
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});