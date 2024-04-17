/*
  Warnings:

  - You are about to drop the column `email` on the `product` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "product_email_key";

-- AlterTable
ALTER TABLE "product" DROP COLUMN "email";
