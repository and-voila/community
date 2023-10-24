/*
  Warnings:

  - You are about to drop the column `isFree` on the `Chapter` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[courseId]` on the table `Chapter` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Chapter" DROP COLUMN "isFree";

-- CreateIndex
CREATE UNIQUE INDEX "Chapter_courseId_key" ON "Chapter"("courseId");
