const path = require("path")
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin")
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      // { enforce: "pre", test: /\.js$/, loader: "eslint-loader" },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"],
        }),
        // use: [
        //   MiniCssExtractPlugin.loader,
        //   "css-loader",
        //   "postcss-loader",
        //   "sass-loader",
        // ],
      },
    ],
  },
  // plugins: [new HtmlWebpackPlugin()],
  plugins: [new ExtractTextPlugin("style.css")],
  // plugins: [
  //   new MiniCssExtractPlugin({
  //     filename: "css/main.css",
  //   }),
  // ],
}
