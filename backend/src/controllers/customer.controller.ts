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

  updateCustomerStatus = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    const statusUpdated = await this.customerService.updateCustomerStatus(req.body, Number(id));
    console.log(statusUpdated);
    
    res.status(200).json(statusUpdated);
  }

  deleteCustomerById = async (req: Request, res: Response) : Promise<void> => {  
    const { id } = req.params;
    
    await this.customerService.deleteCustomerById(Number(id));
  
    res.status(204).end();
  }
}

export default CustomerController;
