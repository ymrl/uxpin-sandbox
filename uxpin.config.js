module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/*.tsx',
        ]
      }
    ],
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'uxpin-sandbox'
};
