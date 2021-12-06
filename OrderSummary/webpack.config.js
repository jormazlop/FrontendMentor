const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path')
const basePath = __dirname;

module.exports = {
  context: path.join(basePath, 'src'),
  resolve: {
    extensions: ['.js', '.jsx'],
   },
   entry: {
     app: ['@babel/polyfill', './index.jsx'],
     appStyles: ['./mystyles.scss',],
     vendorStyles: ['../node_modules/bootstrap/dist/css/bootstrap.css'],
   },
    output: {
      filename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist')
    },
   module: {
     rules: [
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
       {
         test: /\.jsx$/,
         exclude: /node_modules/,
         loader: 'babel-loader'
       },
       {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        {
          loader: "sass-loader",
          options: {
          implementation: require("sass")
        }
      }]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
            "css-loader"
          ],
      },
     ],
   },
   devServer: {
    port: 8080,
    watchFiles: './src'
   },
   plugins: [
       new HtmlWebpackPlugin({
         filename: 'index.html', 
         template: 'index.html',
         favicon: './assets/favicon-32x32.png'
        }),
        new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
          patterns: [
            { from: "./assets", to: "assets" }
          ],
        }),
     ]
};