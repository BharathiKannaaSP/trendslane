/*
  Warnings:

  - The values [ORGANIZATION_SELECTION] on the enum `OnboardingStep` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "OnboardingStep_new" AS ENUM ('BASIC_INFORMATION', 'ADDITIONAL_DETAILS', 'ROLE_REQUIREMENTS', 'COMPLETED');
ALTER TABLE "public"."User" ALTER COLUMN "onboardingStep" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "onboardingStep" TYPE "OnboardingStep_new" USING ("onboardingStep"::text::"OnboardingStep_new");
ALTER TYPE "OnboardingStep" RENAME TO "OnboardingStep_old";
ALTER TYPE "OnboardingStep_new" RENAME TO "OnboardingStep";
DROP TYPE "public"."OnboardingStep_old";
ALTER TABLE "User" ALTER COLUMN "onboardingStep" SET DEFAULT 'BASIC_INFORMATION';
COMMIT;
