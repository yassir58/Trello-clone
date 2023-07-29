const path = require("path");
const webpack = require("webpack");
const Dotenv = require ('dotenv-webpack')

  
module.exports = ()=>{
  return {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      publicPath: "/dist/",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.json$/,
          use: "cson-loader",
        },
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
       new Dotenv (
        {
          path:'./.env'
        }
       )
    ],
    devServer: {
      static: {
        directory: path.resolve(__dirname, "dist"),
      },
      compress: true,
      port: 3000,
    },
    watch: true,
  };
}
