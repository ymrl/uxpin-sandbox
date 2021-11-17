const path = require('path');

module.exports = {
    entry: ['./src/index.tsx'],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    resolve: {
      modules: [__dirname, 'node_modules'],
      extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.svg$/,
          exclude: /node_modules/,
          loader: 'svg-react-loader',
        },
        {
          loader: 'babel-loader',
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          exclude: /node_modules/,
        },
      ],
    },
};
