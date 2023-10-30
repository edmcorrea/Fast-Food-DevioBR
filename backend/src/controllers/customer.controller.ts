import { Request, Response } from 'express';
import CustomerService from '../services/customer.service';
import ThermalService from '../services/thermalPrinter.service';

class CustomerController {
  private customerService = new CustomerService();
  private thermalPrinter = new ThermalService();

  getAllCustomers = async (_req: Request, res: Response): Promise<void> => {
    const customers = await this.customerService.getAllCustomers();

    res.status(200).json(customers);
  };

  createCustomer = async (req: Request, res: Response): Promise<void> => {
    
    const customerCreated = await this.customerService.createCustomer(req.body);
    // this.thermalPrinter.thermalPrintExecute('customerCreated');
    res.status(201).json(customerCreated);
  }
}

export default CustomerController;
