module.exports = {
  env: {
    node: true,
    browser: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-debugger': 'off',
    'no-var': 'warn',
    'no-unused-vars': 'warn',
  },
};
