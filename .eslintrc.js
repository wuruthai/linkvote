module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  plugins: [],
  // add your custom rules heres
  rules: {
    'react/prop-types': 0,
    'react/display-name': 0,
  },
};
