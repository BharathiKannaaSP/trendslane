// lint-staged.config.cjs
module.exports = {
  'apps/client/**/*.{js,jsx,ts,tsx}': (files) => [
    `pnpm -C apps/client exec eslint --fix ${files.map((f) => `"${f}"`).join(' ')}`,
    `pnpm -C apps/client exec prettier --write ${files.map((f) => `"${f}"`).join(' ')}`,
  ],
  'apps/admin/**/*.{js,jsx,ts,tsx}': (files) => [
    `pnpm -C apps/admin exec eslint --fix ${files.map((f) => `"${f}"`).join(' ')}`,
    `pnpm -C apps/admin exec prettier --write ${files.map((f) => `"${f}"`).join(' ')}`,
  ],
  'apps/product-service/**/*.{js,jsx,ts,tsx}': (files) => [
    `pnpm -C apps/product-service exec eslint --fix ${files.map((f) => `"${f}"`).join(' ')}`,
    `pnpm -C apps/product-service exec prettier --write ${files.map((f) => `"${f}"`).join(' ')}`,
  ],
  'apps/**/*.{json,md,css,scss,html}': (files) =>
    files.map((f) => `pnpm exec prettier --write "${f}"`),
};
