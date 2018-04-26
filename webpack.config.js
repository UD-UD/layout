
const path = require('path')

module.exports = {
  mode: 'development',
  context: path.join(__dirname, './src'),
  entry: ['./index'],
  devtool: 'cheap-source-map',
  output: {
    filename: 'bundle.js',
    devtoolModuleFilenameTemplate: '[absolute-resource-path]'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.js$/,
        include: path.join(__dirname, './src'),
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  }
}
