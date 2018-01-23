const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-source-map',
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client',
    './client/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: [/node_modules/, /styles/],
        loader: 'babel-loader',
        include: path.join(__dirname, 'client')
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};
