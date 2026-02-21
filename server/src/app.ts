import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import errorHandler from './handlers/error.handler.js';
import authRouter from './routes/auth.route.js';
import ideaRouter from './routes/idea.route.js';
import userRouter from './routes/user.route.js';
import { morganStream } from './utils/logger.js';

const app = express();

// middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(
  morgan('combined', {
    stream: morganStream,
  }),
);

// health check route
app.get('/api/health', (req, res) => {
  res.send('Server running perfectly.');
});

// server routes
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/idea', ideaRouter);

// global error handler
app.use(errorHandler);

export default app;
