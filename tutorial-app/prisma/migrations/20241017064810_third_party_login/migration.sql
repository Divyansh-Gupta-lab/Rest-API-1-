/*
  Warnings:

  - A unique constraint covering the columns `[thirdPartyId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "thirdPartyId" TEXT,
ALTER COLUMN "password" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_thirdPartyId_key" ON "User"("thirdPartyId");
