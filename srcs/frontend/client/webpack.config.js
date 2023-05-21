const path = require('path');
const webpack = require ('webpack')
module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ],
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    static: {
      directory:path.resolve(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
  },
  watch:true
};
