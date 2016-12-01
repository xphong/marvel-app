# Marvel React App

React + Marvel API

* Searches the Marvel database for the characters
* Built with [https://github.com/xphong/simple-react-redux-starter](https://github.com/xphong/simple-react-redux-starter)
* [Data provided by Marvel. © 2016 Marvel](http://marvel.com)

## Quickstart

Install required dependencies:
```
yarn
```

Run development server:
```
npm run dev
```

Run prod:
```
npm run prod
```

Browser:
```
open http://localhost:3000/
```

Deploy prod:
```
npm run build
```

## Import Mongo DB

Import power levels data:
```
mongoimport --db marvel --collection powerlevels --type json --file data/powerlevels.json --jsonArray
```

## Technologies

* ES6
* React w/ Redux, React Router, Dev Tools
* Semantic UI
* Webpack
* Axios
* MongoDB w/ Mongoose

### Toggle React Dev Tools:
<kbd>CTRL</kbd> + <kbd>H</kbd>


### TODO:

* Sort table
* Search table
* Unit tests
* React server-side rendering