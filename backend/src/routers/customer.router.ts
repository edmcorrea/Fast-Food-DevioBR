import express from 'express';
import CustomerController from "../controllers/customer.controller"
import validateNewCustomer from '../middlewares/customer.middleware';

const router = express.Router();

const customerController = new CustomerController();

router.get('/', customerController.getAllCustomers);
router.post('/', validateNewCustomer, customerController.createCustomer);

export default router;
