# Marvel App

React + Node + MongoDB + Marvel API

* Searches the Marvel database for the characters using the [Marvel API](https://developer.marvel.com/)
* Show power levels of popular Marvel characters
* Built with [https://github.com/xphong/simple-react-redux-starter](https://github.com/xphong/simple-react-redux-starter)
* [Data provided by Marvel. © 2016 Marvel](http://marvel.com)

## Getting Started

### Import Mongo Database Collection

* Import power levels data:
```
mongoimport --db marvel --collection powerlevels --type json --file data/powerlevels.json --jsonArray
```

### Add Marvel API Public/Private Keys

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

* Deploy production build: `npm run build`

* Run integration tests: `npm test`

## Technologies

* ES6
* React w/ Redux, React Router, Dev Tools
* Node w/ Express
* MongoDB w/ Mongoose
* Semantic UI
* Webpack
* Axios
* Mocha, Chai, Supertest

### TODO:

* Sort table
* Search table
* Unit tests

## FAQ
* Toggle React Dev Tools On/Off
<kbd>CTRL</kbd> + <kbd>H</kbd>


