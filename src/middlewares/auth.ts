import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UnauthorizedError from '../errors/unauthorized-error';
import { JWT_ACCESS_SECRET } from "../config";

const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new UnauthorizedError('Необходима авторизация');
    }

    const token = authorization.replace('Bearer ', '');

    req.user = jwt.verify(token, JWT_ACCESS_SECRET) as { _id: string };
  } catch (err) {
    next(new UnauthorizedError('Необходима авторизация'));
  }

  next();
};

export default auth;
