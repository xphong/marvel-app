# React Redux Starter - [http://phonghuynh.ca/reactstarter/](http://phonghuynh.ca/reactstarter/)

* A small React Redux starter that includes an API call to retrieve a list of countries and displays in a table
* Demo: [http://phonghuynh.ca/reactstarter/](http://phonghuynh.ca/reactstarter/)

## Quickstart

Install required dependencies:
```
npm install
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

## File Structure
```
├── README.md
├── devServer.js
├── index.html
├── package.json
├── server.js
├── webpack.config.dev.js
├── webpack.config.prod.js
├── src/
|   ├── actions
|   |   ├── CountriesActions.js
|   ├── components
|   |   ├── Countries.js
|   |   ├── Country.js
|   |   └── Spinner.js
|   ├── constants
|   |   └── ActionTypes.js
|   ├── containers
|   |   ├── App.js
|   |   └── DevTools.js
|   ├── reducers
|   |   ├── countries.js
|   |   └── index.js
|   ├── store
|   |   ├── configureStore.dev.js
|   |   ├── configureStore.prod.js
|   |   └── configureStore.js
|   ├── styles
|   |   └── main.scss
|   ├── index.js
├── .babelrc
├── .eslintignore
├── .eslintrc
└── .gitignore
```

## Technologies

* ES6
* React
* Redux
* Webpack
* React Dev Tools
* Axios

### Toggle React Dev Tools:
<kbd>CTRL</kbd> + <kbd>H</kbd>

#### Based on [Simple Redux Boilerplate](https://github.com/tsaiDavid/simple-redux-boilerplate)
