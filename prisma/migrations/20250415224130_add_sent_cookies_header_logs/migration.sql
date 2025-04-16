/*
  Warnings:

  - Added the required column `sent_cookies` to the `RequestLogs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sent_headers` to the `RequestLogs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RequestLogs" ADD COLUMN     "sent_cookies" TEXT NOT NULL,
ADD COLUMN     "sent_headers" TEXT NOT NULL;
