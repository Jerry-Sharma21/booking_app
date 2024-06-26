import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import express, { Request, Response } from 'express';

import authRoutes from './routes/auth';
import userRoutes from './routes/users';

import 'dotenv/config';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.listen(7000, () => {
  console.log('server running on 7000');
});
