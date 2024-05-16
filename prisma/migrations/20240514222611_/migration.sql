/*
  Warnings:

  - You are about to drop the column `Description` on the `Bookmarks` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Bookmarks" DROP COLUMN "Description",
ADD COLUMN     "description" TEXT;
