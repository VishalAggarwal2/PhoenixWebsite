/*
  Warnings:

  - You are about to drop the column `description` on the `blog` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `blog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `blog` DROP COLUMN `description`,
    DROP COLUMN `title`;
