module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    'react-hooks'
  ],
  'rules': {
    'require-jsdoc': false,
    'react-hooks/rules-of-hooks' : 'error',
    'react-hooks/exhaustive-deps' : 'warn',
  },
};
