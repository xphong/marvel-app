const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

const config = require('./server/config');

const app = express();

let webpackConfig;

if (app.get('env') === 'development') {
  webpackConfig = require('./webpack.config.dev');
} else if (app.get('env') === 'production') {
  webpackConfig = require('./webpack.config.prod');
}

let webpackCompiler = webpack(webpackConfig);

mongoose.connect(config.database);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB.');
});

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(webpackDevMiddleware(webpackCompiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(webpackCompiler));

app.use('/api/v1/powerlevels', require('./server/powerlevels/powerlevelsRoutes'));
app.use('/api/v1/characters', require('./server/characters/charactersRoutes'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(app.get('port'), (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening on port ' + app.get('port'));
});

module.exports = app;
