module.exports = {
  'presets': [
    '@babel/preset-react',
    [ '@babel/preset-env', {
        'targets': {
          'ie': '11'
        },
        'useBuiltIns': 'usage',
        'corejs': '3'
      },
    ],
  ],
};
