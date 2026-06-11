# Trendslane

Trendslane is a pnpm + Turbo monorepo with a localized Next.js admin app, an Express auth service, and shared workspace packages for Prisma, UI, linting, and TypeScript config.

## Workspace Layout

| Path                         | Purpose                                                                                                                               | Version |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `apps/admin`                 | Next.js 16 admin app with locale routing, Clerk auth, next-intl, theme and country providers, dashboard layouts, and legal/auth pages | `0.0.1` |
| `apps/auth-service`          | Express API for Clerk webhooks, health checks, and auth service integration                                                           | `1.0.0` |
| `packages/auth-db`           | Prisma schema, generated client, and shared database exports                                                                          | `1.0.0` |
| `packages/shared`            | Shared helpers such as time formatters and Clerk locale mapping                                                                       | `1.0.0` |
| `packages/ui`                | Shared UI primitives and global styles used by apps                                                                                   | `0.0.0` |
| `packages/eslint-config`     | Shared ESLint presets for the workspace                                                                                               | `0.0.0` |
| `packages/typescript-config` | Shared TypeScript config presets                                                                                                      | `0.0.0` |

## Stack And Versions

| Area              | Version                                |
| ----------------- | -------------------------------------- |
| Node.js           | `>=20` locally, `22` in GitHub Actions |
| pnpm              | `10.33.4`                              |
| Turbo             | `2.9.16`                               |
| Next.js           | `16.2.6`                               |
| React / React DOM | `19.2.4`                               |
| Clerk Next.js     | `7.5.0`                                |
| Clerk Express     | `2.1.17`                               |
| next-intl         | `4.13.0`                               |
| next-themes       | `0.4.6`                                |
| Prisma            | `6.19.3`                               |
| Express           | `5.2.1`                                |

## How The App Works

### Admin App

The admin app is a locale-aware Next.js application. The root locale layout in `apps/admin/app/[locale]/layout.tsx` wires together `next-intl`, Clerk, the theme provider, the appearance provider, and the country provider. It also loads the shared UI stylesheet and sets the document direction based on locale.

Routing is protected in `apps/admin/proxy.ts`. It uses Clerk middleware plus next-intl middleware to:

- redirect signed-out users away from protected dashboard routes
- redirect signed-in users away from sign-in and sign-up pages
- keep locale-prefixed routing consistent across auth and dashboard screens

The visible app areas are:

- `app/[locale]/(auth)` for sign-in and sign-up flows
- `app/[locale]/(dashboard)` for the admin shell and sidebar layout
- `app/[locale]/(legal)` for terms and conditions
- `app/test` for a simple deploy check page

The auth screens use `apps/admin/modules/auth/auth-layout.tsx` for the split-screen marketing layout, while the dashboard shell uses `apps/admin/app/[locale]/(dashboard)/layout.tsx` and `apps/admin/modules/layout/components/app-sidebar.tsx` for navigation.

### Auth Service

The auth service is a small Express API that starts on `PORT` (default `8000`). It exposes:

- `GET /api/v1/health` for service health checks
- `POST /api/v1/webhook/clerk` for Clerk webhook delivery

It verifies Clerk webhooks with Svix, then routes user and organization events through the Prisma-backed database layer in `packages/auth-db`.

### Shared Packages

- `packages/auth-db` owns the Prisma schema and exports the Prisma client plus generated types. Its datasource uses `AUTH_DATABASE_URL`.
- `packages/shared` exports shared helpers such as `getCurrentTimestamp()` and Clerk locale mapping.
- `packages/ui` contains reusable components and the shared Tailwind/global stylesheet consumed by the apps.
- `packages/eslint-config` and `packages/typescript-config` keep lint and TypeScript settings consistent across the monorepo.

## Local Development

```bash
pnpm install
pnpm dev
```

Useful focused commands:

```bash
pnpm --filter admin dev
pnpm --filter @workspace/auth-service dev
pnpm --filter @workspace/auth-db db:generate
pnpm lint
pnpm typecheck
pnpm build
```

Default local ports:

- `apps/admin`: `3001`
- `apps/auth-service`: `8000`

## Environment Variables

### Admin App

| Variable                                          | Purpose                                                      |
| ------------------------------------------------- | ------------------------------------------------------------ |
| `AUTH_DATABASE_URL`                               | Prisma datasource used by `packages/auth-db`                 |
| `NEXT_PUBLIC_AUTH_URL`                            | Base URL for the auth service from the browser               |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`               | Clerk frontend key                                           |
| `CLERK_SECRET_KEY`                                | Clerk backend secret used by server-side auth and middleware |
| `CLERK_WEBHOOK_SIGNING_SECRET`                    | Webhook signature secret shared with the auth service        |
| `NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL` | Clerk sign-in fallback redirect                              |
| `NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL` | Clerk sign-up fallback redirect                              |
| `NEXT_PUBLIC_CONVEX_URL`                          | Convex endpoint used by the admin app                        |

### Auth Service

| Variable                       | Purpose                                     |
| ------------------------------ | ------------------------------------------- |
| `PORT`                         | Service port, default `8000`                |
| `CORS_ORIGIN_ADMIN`            | Allowed admin origin for CORS               |
| `CLERK_PUBLISHABLE_KEY`        | Clerk frontend key available to the service |
| `CLERK_SECRET_KEY`             | Clerk backend secret                        |
| `CLERK_WEBHOOK_SIGNING_SECRET` | Svix webhook signing secret                 |
| `AUTH_DATABASE_URL`            | Prisma datasource URL                       |

### GitHub Actions Secrets

The deploy workflow in `.github/workflows/deploy.yml` expects these secrets:

| Secret                    | Used For                                      |
| ------------------------- | --------------------------------------------- |
| `AUTH_DATABASE_URL`       | Prisma client generation in CI                |
| `VERCEL_TOKEN`            | Deploying the admin app to Vercel             |
| `VERCEL_ORG_ID`           | Vercel org selection                          |
| `VERCEL_PROJECT_ID_ADMIN` | Vercel project for `apps/admin`               |
| `RENDER_API_KEY`          | Triggering a deploy on Render                 |
| `RENDER_AUTH_SERVICE_ID`  | Target Render service for `apps/auth-service` |

## GitHub Actions

The workflow at `.github/workflows/deploy.yml` runs on pushes to `main`.

1. Check out the repo.
2. Set up Node.js `22` and pnpm.
3. Cache the pnpm store and Turbo cache.
4. Install dependencies with `--frozen-lockfile`.
5. Run `pnpm --filter=@workspace/auth-db run db:generate`.
6. Run lint, typecheck, and build through Turbo.
7. Deploy the admin app to Vercel.
8. Trigger a Render deploy for the auth service.

## Deployment Targets

- Vercel hosts `apps/admin`.
- Render hosts `apps/auth-service`.
- GitHub Actions is the orchestration layer that builds first, then deploys both targets.

## Notes

- The Prisma schema lives in `packages/auth-db/prisma/schema.prisma` and writes the generated client to `packages/auth-db/generated/prisma`.
- The admin app uses locale routing for `en`, `de`, `ta`, `hi`, `ar`, and `fr`.
- If you add or change environment variables, update both the app deployment settings and the workflow secrets so CI and production stay in sync.

# Trendslane Authentication & Onboarding Architecture

## Overview

Trendslane uses an approval-driven authentication and onboarding system.

Every user starts as a standard user after signup and must complete onboarding before gaining access to any dashboard.

The system supports three onboarding paths:

1. Admin Request
2. Create Organization (Organization Admin)
3. Join Organization (Organization Member)

Access to dashboards is granted only after the appropriate approval workflow is completed.

---

# Roles

## System Roles

```text
ADMIN
USER
```

### ADMIN

System-level administrator with full platform access.

Permissions:

- Approve Admin Requests
- Approve Organizations
- Manage Countries
- Manage Organizations
- Manage Users
- Access All Dashboards

### USER

Default role assigned to all newly registered users.

Permissions:

- Complete onboarding
- Submit requests
- View request status

---

## Organization Roles

```text
ORG_ADMIN
ORG_MEMBER
```

### ORG_ADMIN

Organization-level administrator.

Permissions:

- Manage organization settings
- Approve member requests
- Manage organization products
- Manage organization users

### ORG_MEMBER

Organization-level contributor.

Permissions:

- Create products
- Edit owned products
- Submit products for approval

---

# Authentication Flow

## Sign Up / Sign In

After successful authentication through Clerk:

```text
User Created
│
├── systemRole = USER
├── onboardingStatus = PENDING
└── accountStatus = ACTIVE
```

The user cannot access any dashboard until onboarding is completed and approved.

---

# Onboarding Flow

Users are redirected to:

```text
/onboarding
```

and must choose one of the following options.

```text
1. Become Admin
2. Create Organization
3. Join Organization
```

---

# Flow A: Become Admin

## Step 1

User selects:

```text
Become Admin
```

## Step 2

System creates:

```text
AdminRequest
status = PENDING
```

## Step 3

User is redirected to:

```text
/request-status
```

## Step 4

Existing ADMIN reviews request.

### Approved

```text
systemRole = ADMIN
```

User gains access to Admin Dashboard.

### Rejected

User remains:

```text
systemRole = USER
```

Rejection reason is displayed.

---

# Flow B: Create Organization (Org Admin)

## Step 1

User selects:

```text
Create Organization
```

## Step 2

User completes organization registration.

Required fields may include:

- Organization Name
- Country
- Description
- Logo
- Legal Documents
- Tax Information

## Step 3

System creates:

```text
Organization
status = PENDING
```

and

```text
OrganizationMember
role = ORG_ADMIN
status = PENDING
```

## Step 4

User is redirected to:

```text
/request-status
```

## Step 5

ADMIN reviews organization request.

### Approved

```text
Organization.status = ACTIVE

OrganizationMember.status = ACTIVE
role = ORG_ADMIN
```

User gains access to Organization Admin Dashboard.

### Rejected

Rejection reason is displayed.

---

# Flow C: Join Organization (Org Member)

## Step 1

User selects:

```text
Join Organization
```

## Step 2

User searches and selects an organization.

Example:

```text
Trendslane India
Trendslane UAE
Trendslane Germany
```

## Step 3

System creates:

```text
OrganizationMember
role = ORG_MEMBER
status = PENDING
```

## Step 4

User is redirected to:

```text
/request-status
```

## Step 5

ORG_ADMIN reviews request.

### Approved

```text
OrganizationMember.status = ACTIVE
```

User gains access to Organization Member Dashboard.

### Rejected

Rejection reason is displayed.

---

# Route Protection

Every protected route must validate:

```text
1. Authentication
2. Onboarding Status
3. Approval Status
4. Role Permissions
```

---

## Access Flow

```text
User Visits Route
        │
        ▼
Authenticated?
        │
 ┌──────┴──────┐
 │             │
 No           Yes
 │             │
 ▼             ▼
Login      Onboarding Complete?
Page             │
          ┌──────┴──────┐
          │             │
         No            Yes
          │             │
          ▼             ▼
    Onboarding      Approved?
        Flow            │
                 ┌──────┴──────┐
                 │             │
                No            Yes
                 │             │
                 ▼             ▼
          Request Status   Role Check
               Page            │
                               ▼
                       Dashboard Access
```

---

# Dashboard Access Matrix

| Role       | Dashboard Access              |
| ---------- | ----------------------------- |
| USER       | No                            |
| ADMIN      | Admin Dashboard               |
| ORG_ADMIN  | Organization Admin Dashboard  |
| ORG_MEMBER | Organization Member Dashboard |

---

# Recommended User States

```text
PENDING
WAITING_APPROVAL
APPROVED
REJECTED
```

These states should be used throughout onboarding and approval workflows.

---

# Architecture Principles

- Authentication handled by Clerk.
- Authorization handled internally by Trendslane.
- Users never receive elevated permissions immediately after signup.
- All elevated access requires approval.
- Organization permissions are separated from system permissions.
- Route protection is enforced on both frontend and backend.
- Approval workflows are auditable and traceable.

This architecture provides a secure, scalable, and approval-driven access control system for the Trendslane platform.


Backend /auth/me
Frontend AuthProvider
AuthGate
/onboarding
/request-status
Admin Request APIs
Organization Request APIs
Dashboard route protection

This gives you a complete approval-driven authentication system before you start building Product Service.
