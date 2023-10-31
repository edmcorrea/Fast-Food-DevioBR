import { ICustomers, IResponseCustomers } from '../interfaces';
import CustomerModel from '../models/customer.model';

class CustomerService {
  private customerModel = new CustomerModel();

  getAllCustomers = async () => this.customerModel.getAllCustomers();

  public async createCustomer(customer: ICustomers) {
    return this.customerModel.createCustomer(customer);
  }

  public async updateCustomerStatus(customer: any, id: number) {
    return this.customerModel.updateCustomerStatus(customer, id);
  }

  public async deleteCustomerById(id: number) {
    return this.customerModel.deleteCustomerById(id);
  }
}

export default CustomerService;
