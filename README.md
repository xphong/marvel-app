# Marvel App - https://marvel-app9000.herokuapp.com/
[![Build Status](https://travis-ci.org/xphong/marvel-app.svg?branch=master)](https://travis-ci.org/xphong/marvel-app)
[![Maintainability](https://api.codeclimate.com/v1/badges/9ac151446159152a64a6/maintainability)](https://codeclimate.com/github/xphong/marvel-app/maintainability)

React + Node + MongoDB + Marvel API

![](https://i.imgur.com/tRTEFr7.gif)

* Searches the Marvel database for the characters using the [Marvel API](https://developer.marvel.com/)
* Show power levels of popular Marvel characters
* Built with [https://github.com/xphong/simple-react-redux-starter](https://github.com/xphong/simple-react-redux-starter)
* [Data provided by Marvel. © 2018 Marvel](http://marvel.com)

## Getting Started

### Import Mongo Database Collection

* Import power levels data:
```
mongoimport --db marvel --collection powerlevels --type json --file data/powerlevels.json --jsonArray
```

### Add Marvel API Public/Private Keys

* Get Marvel API keys from [https://developer.marvel.com/](https://developer.marvel.com/)
* Add your keys to `server/config.js`

### Dependencies

* Install required dependencies:
```
npm install yarn -g
yarn
```

## Scripts

* Run development server (port 3000): `npm run dev`

* Run production server: `npm run prod`

* Deploy production build (Client): `npm run build`

* Run front-end tests: `npm run test`

* Run integration tests: `npm run test:backend`

## Technologies

* React w/ Redux, React Router, Dev Tools
* Node w/ Express
* MongoDB w/ Mongoose
* Semantic UI
* Webpack
* Axios
* Mocha, Chai, Supertest
* Jest, Enzyme
* CI/CD with Travis CI and Heroku

## FAQ
* Toggle React Dev Tools On/Off
<kbd>CTRL</kbd> + <kbd>H</kbd>

## TODO:

* Move to ducks modular pattern
* Clean up eslint errors
* Sort table
* Search table
* Upgrade to React Router v4 🤔
