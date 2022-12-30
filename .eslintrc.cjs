module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:compat/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:lodash/recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte'],
    extends: 'airbnb-base',
  },
  rules: {
    'compat/compat': ['warn'],
    'max-classes-per-file': ['warn', 1],
    'max-lines': ['warn', 700],
    'max-nested-callbacks': ['warn', 3],
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-plusplus': [
      'warn',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-unused-vars': 'warn',
    'prettier/prettier': 'warn',
    'unicorn/filename-case': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/prefer-dom-node-remove': 'off',
    'lodash/prefer-lodash-method': 'off',
    'lodash/prefer-lodash-typecheck': 'off',
    'lodash/prefer-noop': 'off',
    'no-return-assign': 'off',
    'import/first': 'off',
    'import/no-mutable-exports': 'off',
    'no-labels': 'off',
    'no-restricted-syntax': ['error', 'ForInStatement', 'ForOfStatement', 'WithStatement'],
    'import/prefer-default-export': 'off',
    "@typescript-eslint/no-unsafe-argument": 'warn'
  },
  env: {
    es6: true,
    browser: true
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  settings: {
    'svelte3/typescript': require('typescript'),
  },
  plugins: ['svelte3', '@typescript-eslint', 'jest', 'sonarjs'],
  ignorePatterns: [
    '*.cjs',
    'node_modules',
    '*.d.ts',
    '*.config.js',
    '*.config.ts',
    'test/**/*.js',
    '*.html'
  ],
}
