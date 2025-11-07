# Docker setup apps/client

# BUILDER
FROM node:20-alpine AS builder

# pnpm activation
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Deployment
ENV CI=true

COPY . .

RUN pnpm install --frozen-lockfile
RUN pnpm run build --filter ./apps/client

# Create production-only deploy folder
RUN pnpm deploy --filter ./apps/client --prod --legacy /app/deploy

# RUNNER
FROM node:20-alpine AS runner

RUN npm install -g pnpm

WORKDIR /app

COPY --from=builder /app/deploy ./

EXPOSE 3000

CMD ["pnpm", "start"]
