module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb', '@vue/typescript/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'object-curly-newline': 'off',
    'class-methods-use-this': 'off',
    'space-before-function-paren': 'off',
    'no-unused-expressions': 'off',
    'no-plusplus': 'off',
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    '@typescript-eslint/no-empty-function': 'off',
  },
};
