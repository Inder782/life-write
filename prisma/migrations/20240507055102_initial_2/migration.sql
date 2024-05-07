/*
  Warnings:

  - You are about to drop the column `userid` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Blog" DROP CONSTRAINT "Blog_userid_fkey";

-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "userid";

-- DropTable
DROP TABLE "User";
