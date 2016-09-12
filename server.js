
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

config.entry.app.unshift("webpack-dev-server/client?http://localhost:9090", "webpack/hot/dev-server");

config.plugins.push(new webpack.HotModuleReplacementPlugin());

config.devtool = 'eval';

var proxy = {
  "/lsp-rest/*":  {
    target: 'http://localhost:8080/lsp-dmy/',
    rewrite: function(req) {
      req.url = req.url.replace(/^\/lsp-rest/, '');
    }
  },
  "/api/*": {
    target: 'http://localhost:9090/mock/',
    rewrite: function(req) {
      var myurl = req.url.replace(/^\/api\//, '');      
      var pos = myurl.indexOf("?");
      if(pos > 0) {
        req.url = myurl.substr(0, pos) + ".json" + myurl.substr(pos);
      } else {
        req.url = myurl + ".json";
      }
    }
  }
};

var app = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  proxy: proxy,
  hot: true,
});

app.listen(9090, '0.0.0.0', function (err, result) {
  console.log('http://localhost:9090');
  if (err) {
    console.log(err);
  }
});
