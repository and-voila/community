module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'next',
    'turbo',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    'unicorn',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],
    camelcase: ['error', { properties: 'never', ignoreDestructuring: true }],
    'comma-style': ['error', 'last'],
    'jsx-quotes': ['error', 'prefer-double'],
    'no-console': 'warn',
    'prefer-const': 'error',
    'prettier/prettier': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-key': 'error',
    'react/prop-types': 'off',
    'react/self-closing-comp': 'error',
    semi: ['error', 'always'],
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],
  },
};
