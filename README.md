## rucken-todo

A simple todo application demonstrating the basic usage of [rucken](https://github.com/site15/rucken).


### Usage
- Clone or fork this repository
- Make sure you have [node.js](https://nodejs.org/) installed version 6+
- Make sure you have NPM installed version 3+
- run `npm install` to install dependencies
- run `npm start` to fire up dev server
- open browser to [`http://localhost:4200`](http://localhost:4200)
- if you want to use other port, run `ng serve --port=4201`


### Build
- run `npm run build` to build application


### Scaffold
- For scaffold grid, update manually `./srcgen/grid.select.input.modal.json`
- run `npm run _grid`
- reset changes on `./srcgen/grid.select.input.modal.json`
- add custom code in generated files `./src/app/todo/grids/[grid]` and `./src/app/todo/shared/[service and model]`
