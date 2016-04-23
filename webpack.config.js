var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    libraryTarget: 'var',
    library: 'reactHearthstone',
    path: path.join(__dirname, 'dist'),
    filename: 'react-hearthstone.js',
    publicPath: '/react-hearthstone/dist/'
  },
  externals: {
    'react': 'React',
    'jquery': '$'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', query: { presets: ['react'] } },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader') }
    ]
  },
  postcss: [autoprefixer()],
  plugins: [
    new ExtractTextPlugin('style.css')
  ],
  devtool: 'source-map'
};
