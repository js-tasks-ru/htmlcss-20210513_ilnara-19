module.exports = {
  syntax: 'postcss-scss',
    map: { inline: true },
    plugins: [
        require('precss')({
            lookup: { disable: true },
            properties: {
                disable: true,
                preserve: true,
            },
        }),
        require('postcss-import'),
        require('postcss-nested'),
        require('autoprefixer'),
        require('cssnano')({
          preset: ['default', {
              discardComments: {
                  removeAll: true,
              },
              normalizeWhitespace: false,
          }]
      }),
        require('postcss-mixins'),
        require('postcss-strip-inline-comments'),
        require('postcss-advanced-variables'),
    ],
}