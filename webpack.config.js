var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    libraryTarget: 'var',
    library: 'reactHearthstone',
    path: path.join(__dirname, 'build'),
    filename: 'react-hearthstone.js',
    publicPath: '/react-hearthstone/build/'
  },
  externals: {
    'react': 'React'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', query: { presets: ['react'] } },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ],
  devtool: 'source-map'
};
