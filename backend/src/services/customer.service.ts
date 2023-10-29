import { IResponseCustomers } from '../interfaces';
import CustomerModel from '../models/customer.model';

class AssetsService {
  private customerModel = new CustomerModel();

  public async getAllCustomers(): Promise<Array<IResponseCustomers>> {
    return this.customerModel.getAllCustomers();
  }
}

export default AssetsService;
