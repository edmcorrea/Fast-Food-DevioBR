import { ICustomers, IResponseCustomers } from '../interfaces';
import CustomerModel from '../models/customer.model';
import HttpException from '../utils/httpException';

class CustomerService {
  private customerModel = new CustomerModel();

  getAllCustomers = async () => this.customerModel.getAllCustomers();

  public async createCustomer(customer: ICustomers) {
    return this.customerModel.createCustomer(customer);
  }

  public async updateCustomerStatus(customer: ICustomers, id: number) {
    return this.customerModel.updateCustomerStatus(customer, id);
  }
}

export default CustomerService;
