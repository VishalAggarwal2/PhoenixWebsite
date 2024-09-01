/*
  Warnings:

  - You are about to drop the column `createdAt` on the `blog` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `blog` DROP COLUMN `createdAt`;

-- AlterTable
ALTER TABLE `event` DROP COLUMN `createdAt`;
