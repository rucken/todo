## rucken-todo

[![Greenkeeper badge](https://badges.greenkeeper.io/site15/rucken-todo.svg)](https://greenkeeper.io/)
[![Build Status][travis-image]][travis-url]


A simple todo application demonstrating the basic usage of [rucken](https://github.com/site15/rucken).


### Usage
- Clone or fork this repository `git clone https://github.com/site15/rucken-todo.git`
- Make sure you have [node.js](https://nodejs.org/) installed version 6+
- Make sure you have NPM installed version 3+
- Open comand line in folder `rucken-todo`
- Install Angular CLI global `npm install -g @angular/cli@latest`
- Install Angular CLI local `npm install --save-dev @angular/cli@latest`
- run `npm install` to install project dependencies
- run `npm start` to fire up dev server (with backend on port: 5000)
- Open browser to [`http://localhost:4200`](http://localhost:4200)
- If you want to use custom port, run `ng serve --port=4201`
- If you want to use run with mock backend [mockapi.io](https://www.mockapi.io/), run `npm run demo`

### Build
- run `npm run build` to build application


### Scaffold
- For scaffold grid, update manually `./srcgen/grid.select.input.modal.json`
- run `npm run make-grid`
- reset changes on `./srcgen/grid.select.input.modal.json`
- add custom code in generated files `./src/app/todo/grids/[grid]` and `./src/app/todo/shared/[service and model]`

## License

MIT

[travis-image]: https://travis-ci.org/site15/rucken-todo.svg?branch=develop
[travis-url]: https://travis-ci.org/site15/rucken-todo
