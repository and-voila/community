module.exports = {
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'lf',
  tailwindFunctions: ['cn', 'clsx'],
  tailwindConfig: './packages/ui/tailwind.config.js',
  plugins: ['prettier-plugin-tailwindcss'],
};
