import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  const unknownErrorMessage = 'На сервере произошла ошибка';

  res.status(statusCode).send({ message: message || unknownErrorMessage });
  next();
};

export default errorHandler;
