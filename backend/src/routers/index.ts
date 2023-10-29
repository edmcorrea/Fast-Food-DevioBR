import express from 'express';
import customerRouter from './customer.router';

const routers = express.Router();

routers.use('/customer', customerRouter);

export default routers;
