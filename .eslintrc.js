module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  'env': {
    'browser': true,
    'amd': true,
    'node': true
  },
  rules: {
    // override/add rules settings here, such as:
    indent: ['error', 2],
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
    'vue/no-unused-vars': 'warn',
    'vue/require-default-prop': 'off',
    'vue/no-lone-template': 'off',
    'no-unused-vars': 'warn',
    'object-curly-spacing': ['error', 'always']
  }
};
