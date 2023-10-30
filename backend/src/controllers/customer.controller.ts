import { Request, Response } from 'express';
import CustomerService from '../services/customer.service';

class CustomerController {
  private customerService = new CustomerService();

  getAllCustomers = async (_req: Request, res: Response): Promise<void> => {
    const customers = await this.customerService.getAllCustomers();

    res.status(200).json(customers);
  };

  createCustomer = async (req: Request, res: Response): Promise<void> => {
    const customerCreated = await this.customerService.createCustomer(req.body);
    res.status(201).json(customerCreated);
  }
}

export default CustomerController;
