/*
  Warnings:

  - You are about to drop the `UserPreferences` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserPreferences" DROP CONSTRAINT "UserPreferences_userId_fkey";

-- DropTable
DROP TABLE "UserPreferences";

-- CreateTable
CREATE TABLE "UserThemePreferences" (
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

    CONSTRAINT "UserThemePreferences_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserThemePreferences_userId_key" ON "UserThemePreferences"("userId");

-- CreateIndex
CREATE INDEX "UserThemePreferences_userId_idx" ON "UserThemePreferences"("userId");

-- AddForeignKey
ALTER TABLE "UserThemePreferences" ADD CONSTRAINT "UserThemePreferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
