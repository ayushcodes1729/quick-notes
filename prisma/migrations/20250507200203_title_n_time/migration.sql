/*
  Warnings:

  - Added the required column `title` to the `Notes` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `updatedAt` on the `Notes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Notes" ADD COLUMN     "title" TEXT NOT NULL,
DROP COLUMN "updatedAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
