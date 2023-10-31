import express from 'express';
import CustomerController from "../controllers/customer.controller"
import { validateNewCustomer, validateUpdateCustomer } from '../middlewares/customer.middleware';

const router = express.Router();

const customerController = new CustomerController();

router.get('/', customerController.getAllCustomers);
router.post('/', validateNewCustomer, customerController.createCustomer);
router.patch('/:id', validateUpdateCustomer, customerController.updateCustomerStatus);
router.delete('/:id', customerController.deleteCustomerById);

export default router;
