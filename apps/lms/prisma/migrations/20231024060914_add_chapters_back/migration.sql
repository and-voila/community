-- DropIndex
DROP INDEX "Chapter_courseId_key";

-- AlterTable
ALTER TABLE "Chapter" ADD COLUMN     "isFree" BOOLEAN NOT NULL DEFAULT false;
