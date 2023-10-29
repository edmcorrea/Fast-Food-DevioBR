import { PrismaClient } from '@prisma/client';
import customers from './customers';

const prisma = new PrismaClient();

async function main() {
  return customers.forEach(async (customer) => {
    await prisma.customer.create({
      data: customer,
    });
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
