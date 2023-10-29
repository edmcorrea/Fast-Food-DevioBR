import { Prisma } from '@prisma/client';

export interface ICustomers {
  customerName: string;
  productIds: Object[];
  status: string;
}

export interface IResponseCustomers extends ICustomers {
  codCustomer: number;
}
