# Trendslane

A monorepo project built with Turborepo, containing multiple applications and services built with Next.js and TypeScript.

## Production URLs

- **Admin Dashboard**: [https://trendslane-admin.vercel.app/](https://trendslane-admin.vercel.app/)
- **Client Application**: [https://trendslane-clientvercel.app/](https://trendslane-clientvercel.app/)
- **Product Service**: [https://trendslane-product-service.vercel.app/](https://trendslane-product-service.vercel.app/)

## Environment Setup

### Required Secrets

All secrets need to be configured in your GitHub repository at: [GitHub Actions Secrets](https://github.com/BharathiKannaaSP/trendslane/settings/secrets/actions)

Here's how to obtain and set up each required secret:

#### 1. Vercel Configuration

1. **VERCEL_TOKEN**
   - Go to [Vercel Account Settings > Tokens](https://vercel.com/account/settings/tokens)
   - Click "Create New Token"
   - Give it a descriptive name and create
   - Copy the token and add it to GitHub Secrets

2. **VERCEL_ORG_ID**
   - Visit [Vercel Team Settings](https://vercel.com/bharathi-kannaas-projects/~/settings)
   - Scroll down to find "Team ID"
   - Copy the ID and add it to GitHub Secrets

3. **Project IDs**
   Set the following for each application:
   - `VERCEL_PROJECT_ID_ADMIN`
   - `VERCEL_PROJECT_ID_CLIENT`
   - `VERCEL_PROJECT_ID_PRODUCT_SERVICE`
   
   To get each project ID:
   1. Go to the project in Vercel dashboard
   2. Navigate to Project Settings
   3. Find the Project ID in General section

#### 2. Clerk Authentication

1. **CLERK_SECRET_KEY**
   - Get from Clerk Dashboard > API Keys
   - Copy the Secret Key

2. **NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY**
   - Get from Clerk Dashboard > API Keys
   - Copy the Publishable Key

#### 3. Service Configuration

**NEXT_PUBLIC_PRODUCT_SERVICE_URL**
- Set to your product service URL (e.g., https://trendslane-product-service.vercel.app/)

### Secrets Checklist

Ensure all these secrets are set in your GitHub repository:

```
✓ CLERK_SECRET_KEY
✓ NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
✓ NEXT_PUBLIC_PRODUCT_SERVICE_URL
✓ VERCEL_ORG_ID
✓ VERCEL_PROJECT_ID_ADMIN
✓ VERCEL_PROJECT_ID_CLIENT
✓ VERCEL_PROJECT_ID_PRODUCT_SERVICE
✓ VERCEL_TOKEN
```

## Testing Setup

This project uses Jest and React Testing Library for testing the applications. The test setup includes:

### Jest Configuration

- Each application (admin and client) has its own Jest configuration
- Tests are located in `__tests__` directories
- Uses `next/jest` for Next.js-specific testing configuration
- Features include:
  - Automatic mocking capabilities
  - Clear mocks between tests
  - Code coverage reporting
  - Coverage output in the `coverage` directory

### Test Files Structure

```
apps/
├── admin/
│   └── app/
│       └── __tests__/
│           └── page.test.tsx
└── client/
    └── app/
        └── __tests__/
            └── page.test.tsx
```

## CI/CD Pipeline

The project uses GitHub Actions for continuous integration and deployment. The workflow is defined in `.github/workflows/deploy.yml` and is triggered on every push to the main branch.

### Pipeline Stages

#### 1. Lint Stage 🧹
- **Environment**: Runs on Ubuntu latest
- **Setup**:
  - Checks out repository with full history
  - Sets up Node.js 20
  - Configures PNPM package manager
- **Caching**:
  - Implements Turbo cache for faster builds
  - Uses Git SHA for cache keys
- **Change Detection**:
  - Identifies which apps have changed since last commit
  - Smart detection for first commits vs subsequent changes
- **Actions**:
  - Runs linting only on changed applications
  - Outputs changed apps list for subsequent stages

#### 2. Test Stage 🧪
- **Dependencies**: Runs after successful lint stage
- **Scope**:
  - Only runs on admin and client applications
  - Skips testing for other services
- **Process**:
  - Inherits changed apps from lint stage
  - Executes tests using Turbo's pipeline
  - Runs tests in parallel for efficiency

#### 3. Build Stage 🏗️
- **Dependencies**: Runs after successful test stage
- **Environment Variables**:
  - Clerk authentication keys
  - Service URLs
- **Process**:
  - Builds only changed applications
  - Uses Turbo for optimized builds
  - Preserves build artifacts for deployment

#### 4. Deploy Stage 🚀
- **Dependencies**: Runs after successful build stage
- **Permissions**:
  - Read access to repository contents
  - Write access for deployments
- **Environment Configuration**:
  - Vercel deployment tokens 
  - Organization and project IDs
  - Service-specific environment variables
- **Deployment Process**:
  - Selective deployment based on changed apps
  - Supports multiple Vercel projects:
    - Admin dashboard
    - Client application
    - Product service
  - Production deployments with `--prod` flag

### Security and Secrets

The workflow uses the following secret configurations:
- **Authentication**:
  - `CLERK_SECRET_KEY`
  - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- **Vercel Configuration**:
  - `VERCEL_TOKEN`
  - `VERCEL_ORG_ID`
  - Project-specific IDs for each application
- **Service URLs**:
  - `NEXT_PUBLIC_PRODUCT_SERVICE_URL`

### Optimization Features

1. **Smart Change Detection**:
   - Only processes applications that have changed
   - Handles both initial commits and incremental changes

2. **Caching Strategy**:
   - Turbo cache for build artifacts
   - Dependency caching with PNPM
   - OS-specific cache keys

3. **Parallel Processing**:
   - Independent builds for each application
   - Concurrent test execution
   - Selective service deployment

4. **Error Handling**:
   - Stage-specific failure isolation
   - Dependency chain management
   - Clear error reporting

## Project Structure

This Turborepo includes the following packages/apps:

### Apps and Packages

#### Applications
- `admin`: Admin dashboard application built with [Next.js](https://nextjs.org/)
- `client`: Client-facing storefront application built with [Next.js](https://nextjs.org/)
- `order-service`: Order management microservice
- `payment-service`: Payment processing microservice
- `product-service`: Product management microservice

#### Shared Packages
- `@repo/eslint-config`: Shared ESLint configurations
  - Base configuration for all projects
  - Next.js specific rules
  - React internal rules
- `@repo/typescript-config`: Shared TypeScript configurations
  - Base configuration
  - Next.js configuration
  - React library configuration

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Development Commands

#### Install Dependencies
```bash
# Install all dependencies
pnpm install
```

#### Development Mode
```bash
# Using PNPM
# Run all applications
pnpm dev

# Run specific application
pnpm --filter admin dev
pnpm --filter client dev
pnpm --filter product-service dev

# Using Turbo
turbo dev                    # Run all apps
turbo dev --filter=admin    # Run only admin app
turbo dev --filter=client   # Run only client app
```

#### Testing
```bash
# Using PNPM
# Run all tests
pnpm test

# Test specific application
pnpm --filter admin test
pnpm --filter client test

# Run tests in watch mode
pnpm --filter admin test:watch

# Generate coverage report
pnpm --filter admin test --coverage

# Using Turbo
turbo test                   # Test all apps
turbo test --filter=admin   # Test only admin app
turbo test --filter=client  # Test only client app
```

#### Linting
```bash
# Using PNPM
# Lint all applications
pnpm lint

# Lint specific application
pnpm --filter admin lint
pnpm --filter client lint

# Fix linting issues
pnpm --filter admin lint:fix

# Using Turbo
turbo lint                   # Lint all apps
turbo lint --filter=admin   # Lint only admin app
turbo lint --filter=client  # Lint only client app
```

#### Building
```bash
# Using PNPM
# Build all applications
pnpm build

# Build specific application
pnpm --filter admin build
pnpm --filter client build
pnpm --filter product-service build

# Using Turbo
turbo build                    # Build all apps
turbo build --filter=admin    # Build only admin app
turbo build --filter=client   # Build only client app
```

#### Advanced Turbo Commands
```bash
# Run multiple tasks
turbo lint test build         # Run lint, test, and build in sequence

# Run tasks with dependencies
turbo build --filter=admin...  # Build admin and its dependencies

# Run tasks in parallel
turbo run dev --parallel      # Run dev command in parallel

# Cache Management
turbo run build --force       # Ignore cache, force rebuild
turbo run build --no-cache    # Disable caching for this run

# Workspace Filtering
turbo run build --filter=[prod]  # Run in production workspace only
turbo run test --filter=!admin   # Run tests in all workspaces except admin
```

#### Clean Build Files
```bash
# Using PNPM
# Clean all applications
pnpm clean

# Clean specific application
pnpm --filter admin clean

# Using Turbo
turbo clean                    # Clean all apps
turbo clean --filter=admin    # Clean only admin app
```

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo build

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo build
yarn dlx turbo build
pnpm exec turbo build
```

You can build a specific package by using a [filter](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters):

```
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo build --filter=docs

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo build --filter=docs
yarn exec turbo build --filter=docs
pnpm exec turbo build --filter=docs
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo dev

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo dev
yarn exec turbo dev
pnpm exec turbo dev
```

You can develop a specific package by using a [filter](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters):

```
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo dev --filter=web

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo dev --filter=web
yarn exec turbo dev --filter=web
pnpm exec turbo dev --filter=web
```

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```
cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo login

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo login
yarn exec turbo login
pnpm exec turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo link

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo link
yarn exec turbo link
pnpm exec turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)
