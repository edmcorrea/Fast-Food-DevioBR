import { ICustomers, IResponseCustomers } from '../interfaces';
import CustomerModel from '../models/customer.model';
import HttpException from '../utils/httpException';

class AssetsService {
  private customerModel = new CustomerModel();

  getAllCustomers = async () => this.customerModel.getAllCustomers();

  public async createCustomer(customer: ICustomers) {
    return this.customerModel.createCustomer(customer);
  }
}

export default AssetsService;
