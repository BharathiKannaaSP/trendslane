// lint-staged.config.cjs  (CommonJS version)
module.exports = {
  'apps/client/**/*.{js,jsx,ts,tsx}': (files) => [
    `cd apps/client && pnpm exec eslint --fix ${files.join(' ')}`,
    `cd apps/client && pnpm exec prettier --write ${files.join(' ')}`
  ],
  'apps/admin/**/*.{js,jsx,ts,tsx}': (files) => [
    `cd apps/admin && pnpm exec eslint --fix ${files.join(' ')}`,
    `cd apps/admin && pnpm exec prettier --write ${files.join(' ')}`
  ],
  'apps/product-service/**/*.{js,jsx,ts,tsx}': (files) => [
    `cd apps/product-service && pnpm exec eslint --fix ${files.join(' ')}`,
    `cd apps/product-service && pnpm exec prettier --write ${files.join(' ')}`
  ],
  'apps/**/*.{json,md,css,scss,html}': (files) =>
    files.map((f) => `pnpm exec prettier --write ${f}`)
};
