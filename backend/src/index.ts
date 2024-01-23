import cors from 'cors';
import mongoose from 'mongoose';
import express, { Request, Response } from 'express';

import userRoutes from './routes/users';

import 'dotenv/config';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/users', userRoutes);

app.listen(7000, () => {
  console.log('server running on 7000');
});
