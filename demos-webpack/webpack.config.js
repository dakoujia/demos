const path = require('path');
const ExtractTextplugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './src'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
    new ExtractTextplugin({
      // 从js文件中提取出来.css文件的名称
      filename: `[name]_[contenthash:8].css`,
    })
  ]
}