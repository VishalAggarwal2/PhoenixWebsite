/*
  Warnings:

  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Imageblog` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `images` to the `blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `images` to the `event` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Image` DROP FOREIGN KEY `Image_eventId_fkey`;

-- DropForeignKey
ALTER TABLE `Imageblog` DROP FOREIGN KEY `Imageblog_blogId_fkey`;

-- AlterTable
ALTER TABLE `blog` ADD COLUMN `images` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `event` ADD COLUMN `images` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Image`;

-- DropTable
DROP TABLE `Imageblog`;
