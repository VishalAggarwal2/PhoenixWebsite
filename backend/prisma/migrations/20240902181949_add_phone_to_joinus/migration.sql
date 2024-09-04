/*
  Warnings:

  - Added the required column `phone` to the `joinus` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `joinus` ADD COLUMN `phone` VARCHAR(191) NOT NULL;
