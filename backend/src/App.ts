import express from 'express';
const cors = require('cors');
import 'express-async-errors';
import routers from './routers';
import httpErrorExceptions from './middlewares/httpExceptionMiddleware';

const app = express();

app.use(express.json());
app.use(cors());

app.use(routers);
app.use(httpErrorExceptions);

export function listen(_port: string | number, _arg1: () => void) {
  throw new Error('Function not implemented.');
}

export function get(arg0: string, arg1: (_request: any, response: { send: () => void; }) => void) {
  throw new Error("Function not implemented.");
}
export default app;

module.exports = app;
