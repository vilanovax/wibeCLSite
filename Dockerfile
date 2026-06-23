# syntax=docker/dockerfile:1

# ---- پایه ----
FROM node:20-alpine AS base
# libc6-compat برای سازگاری باینری‌های native (مثل sharp برای بهینه‌سازی تصویر)
RUN apk add --no-cache libc6-compat

# ---- نصب وابستگی‌ها ----
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# ---- ساخت ----
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---- اجرا ----
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# کاربر غیر-root برای امنیت
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# خروجی standalone شاملِ سرور و node_modules لازم است؛
# public و static باید جداگانه کپی شوند.
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

# بررسی سلامت ساده
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD wget -qO- http://127.0.0.1:3000/ >/dev/null 2>&1 || exit 1

CMD ["node", "server.js"]
