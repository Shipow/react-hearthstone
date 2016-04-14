var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    libraryTarget: 'var',
    library: 'reactHearthstone',
    path: path.join(__dirname, 'build'),
    filename: 'react-hearthstone.js',
    publicPath: 'http://matkl.github.io/react-hearthstone/build/'
  },
  externals: {
    'react': 'React'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', query: { presets: ['react'] } }
    ]
  },
  devtool: 'source-map'
};
