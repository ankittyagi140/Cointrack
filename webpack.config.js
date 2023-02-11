const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./client/src/App.jsx",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 9000,
    hot: true,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        // pathRewrite: { "^/api": "" },
        changeOrigin: true,
        secure: false,
      },
    },
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      "@apps": path.resolve(__dirname, "client/src/apps"),
    },
    extensions: [".jsx", ".js", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.s[ca]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/public/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
};
