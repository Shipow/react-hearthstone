var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  output: {
    library: 'ReactHearthstone',
    libraryTarget: 'umd'
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
