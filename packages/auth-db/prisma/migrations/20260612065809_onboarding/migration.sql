-- CreateEnum
CREATE TYPE "OnboardingStep" AS ENUM ('BASIC_INFORMATION', 'ADDITIONAL_DETAILS', 'ORGANIZATION_SELECTION', 'COMPLETED');

-- CreateEnum
CREATE TYPE "OnboardingPath" AS ENUM ('JOIN_ORGANIZATION', 'CREATE_ORGANIZATION', 'BECOME_ADMIN');

-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "deletedByClerkUserId" TEXT,
ADD COLUMN     "updatedByClerkUserId" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "onboardingPath" "OnboardingPath",
ADD COLUMN     "onboardingStartedAt" TIMESTAMP(3),
ADD COLUMN     "onboardingStep" "OnboardingStep" NOT NULL DEFAULT 'BASIC_INFORMATION';

-- CreateIndex
CREATE INDEX "Organization_updatedByClerkUserId_idx" ON "Organization"("updatedByClerkUserId");

-- CreateIndex
CREATE INDEX "Organization_deletedByClerkUserId_idx" ON "Organization"("deletedByClerkUserId");

-- CreateIndex
CREATE INDEX "User_onboardingStep_idx" ON "User"("onboardingStep");

-- AddForeignKey
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_updatedByClerkUserId_fkey" FOREIGN KEY ("updatedByClerkUserId") REFERENCES "User"("clerkUserId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_deletedByClerkUserId_fkey" FOREIGN KEY ("deletedByClerkUserId") REFERENCES "User"("clerkUserId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganizationMember" ADD CONSTRAINT "OrganizationMember_approvedByClerkUserId_fkey" FOREIGN KEY ("approvedByClerkUserId") REFERENCES "User"("clerkUserId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdminRequest" ADD CONSTRAINT "AdminRequest_reviewedByClerkUserId_fkey" FOREIGN KEY ("reviewedByClerkUserId") REFERENCES "User"("clerkUserId") ON DELETE SET NULL ON UPDATE CASCADE;
