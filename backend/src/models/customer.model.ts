// import { ICustomers, IResponseCustomers } from '../interfaces';
// import HttpException from '../utils/httpException';
// import { Context, prismaContext } from './context';

// class CustomerModel {
//   context: Context;

//   constructor(context: Context = prismaContext) {
//     this.context = context;
//   }

//   getAllCustomers = async() =>  this.context.prisma.customer.findMany();

//   public async createCustomer(customer: any) {
//     try {
//       const customerCreated = await this.context.prisma.customer.create({
//         data: customer
//       });
//       return customerCreated
      
//     } catch (error: any) {
//       if (error && error.meta.target[0]) {
//         throw new HttpException(409, `${error.meta.target[0]} already registered`);
//       }
//     }
//   }

//   public async updateCustomerStatus(customer: any, id: number) {
//     try {
//       return this.context.prisma.customer.update({
//         where: {
//           codCustomer: id,
//         },
//         data: customer
//       });
            
//     } catch (error: any) {
//       if (error && error.meta.target[0]) {
//         throw new HttpException(409, `${error.meta.target[0]} already registered`);
//       }
//       console.log(error); // remover
//     }
//   }

//   public async deleteCustomerById(id: number) {
//     return this.context.prisma.customer.delete({
//       where: {
//         codCustomer: id,
//       },
//     })
//   }
// }

// export default CustomerModel;
