-- CreateTable
CREATE TABLE `Repository` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `stars` INTEGER NOT NULL,
    `user_name` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
