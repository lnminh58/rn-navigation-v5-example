module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['import'],
  rules: {
    'global-require': 0,
    'comma-dangle': 0,
    'spaced-comment': 0,
    'new-cap': [
      2,
      {
        capIsNewExceptions: ['Map'],
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/forbid-prop-types': 0,
    'react/prop-types': [
      2,
      {
        ignore: ['focused'],
      },
    ],
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': [
      2,
      {
        amd: true,
        ignore: ['@'],
      },
    ],
    'import/prefer-default-export': 0,
    'no-plusplus': 0,
    'prefer-destructuring': 0,
    'react/prefer-stateless-function': 0,
    'one-var': 0,
    'arrow-parens': [2, 'as-needed'],
    'object-curly-newline': 0,
    'import/no-cycle': 0,
    'react/jsx-props-no-spreading': 0,
    'react/static-property-placement': [
      'error',
      'property assignment',
      {
        defaultProps: 'static public field',
        propTypes: 'static public field',
      },
    ],
    'linebreak-style': 0,
    'react/require-default-props': 0,
    'implicit-arrow-linebreak': 0,
    'react/prop-types': 0,
    'no-use-before-define': ['error', { "variables": false }],
    'class-methods-use-this': 0,
  },
};
