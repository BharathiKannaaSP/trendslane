-- CreateEnum
CREATE TYPE "Country" AS ENUM ('in', 'fr', 'us');

-- CreateEnum
CREATE TYPE "Audience" AS ENUM ('women', 'men', 'teen', 'kids');

-- CreateTable
CREATE TABLE "BannerImage" (
    "id" SERIAL NOT NULL,
    "country" "Country"[],
    "audience" "Audience" NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "altText" TEXT NOT NULL,
    "title" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "sortIndex" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BannerImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "BannerImage_active_idx" ON "BannerImage"("active");

-- CreateIndex
CREATE UNIQUE INDEX "BannerImage_audience_country_key" ON "BannerImage"("audience", "country");
