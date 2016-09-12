var webpack = require("webpack");
var publicPath = "/build/";
var pkg = require("./package.json");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var vendor = Object.keys(pkg.dependencies);

module.exports = {
  //页面入口文件配置
  entry: {
    app: ["./src/index.js"],
    vendor: vendor
  },
  
  //入口文件输出配置
  output: {
    path: __dirname + publicPath,
    publicPath: publicPath,
    filename: '[name].js',
    sourceMapFilename:'[name].map'
  },

  module: {
	//加载器配置
    loaders: [
      {test: /\.vue$/, loader: 'vue'},
      {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
      {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'}
    ]
  },
  
  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    }),
  	new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
    new ExtractTextPlugin("[name].css")
  ],

  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime'],
    sourceMaps: 'both'
  },

  devtool: "source-map"
};