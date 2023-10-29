-- CreateTable
CREATE TABLE "Customer" (
    "codCustomer" SERIAL NOT NULL,
    "customerName" TEXT NOT NULL,
    "productIds" JSONB,
    "status" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("codCustomer")
);
