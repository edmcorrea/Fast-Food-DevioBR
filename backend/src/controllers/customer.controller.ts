import { Request, Response } from 'express';

class CustomerController {

  getAllCustomers = async (_req: Request, res: Response): Promise<void> => {

    res.status(200).json('oi');
  };




}

export default CustomerController;
