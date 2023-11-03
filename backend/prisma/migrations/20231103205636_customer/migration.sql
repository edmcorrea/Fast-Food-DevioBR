-- CreateTable
CREATE TABLE `Customer` (
    `codCustomer` INTEGER NOT NULL AUTO_INCREMENT,
    `customerName` VARCHAR(191) NOT NULL,
    `products` JSON NULL,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`codCustomer`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
