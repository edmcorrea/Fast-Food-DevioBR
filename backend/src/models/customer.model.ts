import { ICustomers, IResponseCustomers } from '../interfaces';
import { Context, prismaContext } from './context';

class CustomerModel {
  context: Context;

  constructor(context: Context = prismaContext) {
    this.context = context;
  }

  public async getAllCustomers(): Promise<Array<IResponseCustomers>> {
      const getCustomers = await this.context.prisma.customer.findMany();
      return getCustomers;

  }
}

export default CustomerModel;
