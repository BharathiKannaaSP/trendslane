# Docker setup apps/admin

# BUILDER
FROM node:20-alpine AS builder

# pnpm activation
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Deployment
ENV CI=true

COPY . .

RUN pnpm install --frozen-lockfile
RUN pnpm run build --filter ./apps/admin

# Create production-only deploy folder
RUN pnpm deploy --filter ./apps/admin --prod --legacy /app/deploy

# RUNNER
FROM node:20-alpine AS runner

RUN npm install -g pnpm

WORKDIR /app

COPY --from=builder /app/deploy ./

EXPOSE 3001

CMD ["pnpm", "start"]
