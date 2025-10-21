/*
  Warnings:

  - Added the required column `magictypeId` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "magictypeId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Magictype" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Magictype_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_magictypeId_fkey" FOREIGN KEY ("magictypeId") REFERENCES "Magictype"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
