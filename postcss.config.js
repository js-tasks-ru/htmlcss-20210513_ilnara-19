module.exports = {
  syntax: 'postcss-scss',
    map: { inline: true },
    plugins: [
      require('precss')({
        lookup: { disable: true },
        stage: false,
        properties: {
            disable: true,
            preserve: true, 
          },         
    }),
        require('postcss-import'),
        require('postcss-mixins'),
        require('postcss-advanced-variables'),
        require('postcss-nested'),
        require('autoprefixer'),
        require('postcss-map-get'),
        require('cssnano')({
          preset: ['default', {
              discardComments: {
                  removeAll: true,
              },
              normalizeWhitespace: false,
          }]
      }),
    ]
}