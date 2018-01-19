const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Router = require('react-router');

const routes = require('./client/routes');
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

app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      res.status(200).send(renderFullPage());
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});

app.listen(app.get('port'), 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening on port ' + app.get('port'));
});

function renderFullPage(html) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Marvel App - Phong Huynh</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/semantic-ui/2.2.6/semantic.min.css">
      </head>

      <body>
        <div id="root">
          ${html}
        </div>
      </body>

      <script src="/static/bundle.js"></script>
    </html>
  `;
}

module.exports = app;
