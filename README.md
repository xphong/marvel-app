# Marvel App

React + Node + MongoDB + Marvel API

* Searches the Marvel database for the characters
* Built with [https://github.com/xphong/simple-react-redux-starter](https://github.com/xphong/simple-react-redux-starter)
* [Data provided by Marvel. © 2016 Marvel](http://marvel.com)

## Getting Started

### Import Mongo Database Collection

Import power levels data:
```
mongoimport --db marvel --collection powerlevels --type json --file data/powerlevels.json --jsonArray
```

### Dependencies

Install required dependencies:
```
npm install yarn -g
yarn
```

Run development server (port 3000): `npm run dev`

Run production server: `npm run prod`

Deploy production build: `npm run build`

Run integration tests: `npm test`

## Toggle React Dev Tools On/Off
<kbd>CTRL</kbd> + <kbd>H</kbd>


## Technologies

* ES6
* React w/ Redux, React Router, Dev Tools
* Node w/ Express
* MongoDB w/ Mongoose
* Semantic UI
* Webpack
* Axios

### TODO:

* Sort table
* Search table
* Unit tests
