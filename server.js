const path = require('path');
const express = require('express');
const webpack = require('webpack');

const app = express();

let config, compiler;

if (app.get('env') === 'development') {
  config = require('./webpack.config.dev');
} else if (app.get('env') === 'production') {
  config = require('./webpack.config.prod');
}

compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
