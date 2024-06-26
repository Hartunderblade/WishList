/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // override/add rules settings here, such as:
    'vue/no-unused-vars': proccess.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/no-multiple-template-root' : off,
    lintOnSave: off
  }
}
