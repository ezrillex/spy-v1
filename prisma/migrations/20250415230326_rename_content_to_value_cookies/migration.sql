/*
  Warnings:

  - You are about to drop the column `content` on the `CookieLogs` table. All the data in the column will be lost.
  - Added the required column `value` to the `CookieLogs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CookieLogs" DROP COLUMN "content",
ADD COLUMN     "value" TEXT NOT NULL;
