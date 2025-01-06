import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import { errors } from 'celebrate';
import authRouter from './routes/auth';
import errorHandler from './middlewares/error-handler';
import notFoundHandler from './middlewares/not-found-handler';
import logger from './middlewares/logger';
import { MONGO_ADDRESS } from './config';

const { requestLogger, errorLogger } = logger;
const { PORT = 3000 } = process.env;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(MONGO_ADDRESS);

app.use(helmet());
app.use(requestLogger);
app.use('/', authRouter);
app.use(errorLogger);
app.use(errors());
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT);
