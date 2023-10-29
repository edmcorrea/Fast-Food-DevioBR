import { ErrorRequestHandler } from 'express';
import HttpException from '../utils/httpException';

const httpErrorExceptions: ErrorRequestHandler = (err, _req, res, _next) => {
  const { statusCode, message } = err as HttpException;
  res.status(statusCode || 500).json({ message });
};

export default httpErrorExceptions;
