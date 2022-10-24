module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier', 'plugin:react/jsx-runtime'],
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
    },
  },
  rules: {
    semi: [2, 'never'],
  },
}
