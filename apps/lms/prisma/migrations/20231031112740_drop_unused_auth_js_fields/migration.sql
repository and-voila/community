/*
  Warnings:

  - You are about to drop the column `oauth_token` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `oauth_token_secret` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `refresh_token_expires_in` on the `accounts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "oauth_token",
DROP COLUMN "oauth_token_secret",
DROP COLUMN "refresh_token_expires_in";
