module.exports = {
  plugins: [
    '@babel/plugin-syntax-optional-chaining',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-object-rest-spread',

    ['@babel/plugin-transform-runtime', {
      regenerator: true,
    }],
  ],

  presets: [
    ['@babel/env', {
      targets: {
        node: '13',
      },

      corejs: '3',
      useBuiltIns: 'usage',
      shippedProposals: true,
      modules: false,
    }],
  ],
};
