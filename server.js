const path = require('path');
const express = require('express');
const webpack = require('webpack');
const bodyParser = require('body-parser');

const app = express();

let config, compiler;

if (app.get('env') === 'development') {
  config = require('./webpack.config.dev');
} else if (app.get('env') === 'production') {
  config = require('./webpack.config.prod');
}

compiler = webpack(config);

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(app.get('port'), 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening on port ' + app.get('port'));
});
