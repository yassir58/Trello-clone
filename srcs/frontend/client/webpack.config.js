const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = (env) => {
  const isProduction = env.NODE_ENV === 'production';
  const envFile = isProduction ? '.env.production' : '.env.development';
  const envPath = path.resolve(__dirname, envFile);
  const envVars = require('dotenv').config({ path: envPath }).parsed || {};

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
       new webpack.DefinePlugin({
        'process.env': JSON.stringify(envVars),
      }),
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
};
