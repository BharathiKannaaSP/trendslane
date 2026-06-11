/*
  Warnings:

  - The values [APPROVED] on the enum `OrganizationStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `rejectedReason` on the `Organization` table. All the data in the column will be lost.
  - Made the column `firstName` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastName` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "OnboardingStatus" AS ENUM ('PENDING', 'WAITING_APPROVAL', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('ADMIN', 'ORG_ADMIN', 'ORG_MEMBER');

-- CreateEnum
CREATE TYPE "MembershipStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "AdminRequestStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- AlterEnum
BEGIN;
CREATE TYPE "OrganizationStatus_new" AS ENUM ('PENDING', 'ACTIVE', 'REJECTED', 'SUSPENDED', 'NEEDS_ADDITIONAL_INFO');
ALTER TABLE "public"."Organization" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Organization" ALTER COLUMN "status" TYPE "OrganizationStatus_new" USING ("status"::text::"OrganizationStatus_new");
ALTER TYPE "OrganizationStatus" RENAME TO "OrganizationStatus_old";
ALTER TYPE "OrganizationStatus_new" RENAME TO "OrganizationStatus";
DROP TYPE "public"."OrganizationStatus_old";
ALTER TABLE "Organization" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;

-- AlterTable
ALTER TABLE "Organization" DROP COLUMN "rejectedReason",
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "rejectionReason" TEXT;

-- AlterTable
ALTER TABLE "OrganizationMember" ADD COLUMN     "approvedAt" TIMESTAMP(3),
ADD COLUMN     "approvedByClerkUserId" TEXT,
ADD COLUMN     "rejectionReason" TEXT,
ADD COLUMN     "status" "MembershipStatus" NOT NULL DEFAULT 'PENDING',
ALTER COLUMN "joinedAt" DROP NOT NULL,
ALTER COLUMN "joinedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdByClerkUserId" TEXT,
ADD COLUMN     "deletedByClerkUserId" TEXT,
ADD COLUMN     "onboardingCompletedAt" TIMESTAMP(3),
ADD COLUMN     "onboardingRejectionReason" TEXT,
ADD COLUMN     "onboardingStatus" "OnboardingStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "selectedAccountType" "AccountType",
ADD COLUMN     "updatedByClerkUserId" TEXT,
ALTER COLUMN "firstName" SET NOT NULL,
ALTER COLUMN "lastName" SET NOT NULL,
ALTER COLUMN "countryName" DROP NOT NULL,
ALTER COLUMN "countryCode" DROP NOT NULL;

-- CreateTable
CREATE TABLE "AdminRequest" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" "AdminRequestStatus" NOT NULL DEFAULT 'PENDING',
    "reason" TEXT,
    "reviewedByClerkUserId" TEXT,
    "reviewedAt" TIMESTAMP(3),
    "rejectionReason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdminRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "AdminRequest_userId_idx" ON "AdminRequest"("userId");

-- CreateIndex
CREATE INDEX "AdminRequest_status_idx" ON "AdminRequest"("status");

-- CreateIndex
CREATE INDEX "Organization_isActive_idx" ON "Organization"("isActive");

-- CreateIndex
CREATE INDEX "OrganizationMember_status_idx" ON "OrganizationMember"("status");

-- CreateIndex
CREATE INDEX "User_onboardingStatus_idx" ON "User"("onboardingStatus");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_createdByClerkUserId_fkey" FOREIGN KEY ("createdByClerkUserId") REFERENCES "User"("clerkUserId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_deletedByClerkUserId_fkey" FOREIGN KEY ("deletedByClerkUserId") REFERENCES "User"("clerkUserId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_updatedByClerkUserId_fkey" FOREIGN KEY ("updatedByClerkUserId") REFERENCES "User"("clerkUserId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdminRequest" ADD CONSTRAINT "AdminRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
