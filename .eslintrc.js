module.exports = {
  env: {
    browser: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: '2022',
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
  },
}
