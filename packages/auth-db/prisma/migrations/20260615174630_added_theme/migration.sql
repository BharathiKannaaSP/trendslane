-- CreateEnum
CREATE TYPE "ThemeMode" AS ENUM ('LIGHT', 'DARK', 'SYSTEM');

-- CreateEnum
CREATE TYPE "ThemeRadius" AS ENUM ('SM', 'MD', 'LG');

-- CreateEnum
CREATE TYPE "ThemeScale" AS ENUM ('COMPACT', 'COMFORTABLE', 'SPACIOUS');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "address" TEXT,
ADD COLUMN     "bio" TEXT,
ADD COLUMN     "language" TEXT,
ADD COLUMN     "phoneNumber" TEXT,
ADD COLUMN     "referralCode" TEXT,
ADD COLUMN     "timezone" TEXT;

-- CreateTable
CREATE TABLE "UserPreferences" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "themeMode" "ThemeMode" NOT NULL DEFAULT 'SYSTEM',
    "themeAccent" TEXT NOT NULL DEFAULT 'default',
    "themePreset" TEXT NOT NULL DEFAULT 'default',
    "themeSidebar" TEXT NOT NULL DEFAULT 'default',
    "themeRadius" "ThemeRadius" NOT NULL DEFAULT 'MD',
    "themeScale" "ThemeScale" NOT NULL DEFAULT 'COMFORTABLE',
    "themeAccentCustomized" BOOLEAN NOT NULL DEFAULT false,
    "themeVersion" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserPreferences_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserPreferences_userId_key" ON "UserPreferences"("userId");

-- CreateIndex
CREATE INDEX "UserPreferences_userId_idx" ON "UserPreferences"("userId");

-- AddForeignKey
ALTER TABLE "UserPreferences" ADD CONSTRAINT "UserPreferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
