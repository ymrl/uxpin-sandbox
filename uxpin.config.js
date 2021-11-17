module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/Button.tsx',
          'src/components/Card.tsx',
          'src/components/Container.tsx',
        ]
      }
    ],
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'uxpin-sandbox'
};
