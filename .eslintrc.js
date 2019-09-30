module.exports = {
  root: true,
  extends: 'airbnb-base',
  parser: 'babel-eslint',

  env: {
    node: true,
  },

  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',

    'keyword-spacing': ['error', {
      overrides: {
        if: { after: false },
        for: { after: false },
        while: { after: false },
      },
    }],

    'no-console': 'off',
    'function-paren-newline': ['error', 'consistent'],
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',

    'quotes': ['error', 'single', {
      allowTemplateLiterals: true,
    }]
  }
};
