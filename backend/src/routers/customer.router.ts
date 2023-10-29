import express from 'express';
import CustomerController from "../controllers/customer.controller"

const router = express.Router();

const customerController = new CustomerController();

router.get('/', customerController.getAllCustomers);

export default router;
