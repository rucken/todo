# rucken-todo

[![Greenkeeper badge](https://badges.greenkeeper.io/rucken/todo-web.svg)](https://greenkeeper.io/)
[![Build Status][travis-image]][travis-url]


A simple todo application demonstrating the basic usage of [rucken](https://github.com/rucken).


## Usage
- Clone or fork this repository `git clone https://github.com/rucken/todo-web.git`
- Make sure you have [node.js](https://nodejs.org/) installed version 6+
- Make sure you have NPM installed version 3+
- Open comand line in folder `rucken-todo`
- Install Angular CLI global `npm install -g @angular/cli@latest`
- Install Angular CLI local `npm install --save-dev @angular/cli@latest`
- run `npm install` to install project dependencies
- run `npm run app-todo:start-dev` to fire up dev server with JIT (backend on port: 5000)
- run `npm run app-todo:start-prod` to fire up dev server with AoT (backend on port: 5000)
- run `npm run app-todo:start-mockapi` to fire up dev server with AoT (backend on [mockapi.io](https://www.mockapi.io/))
- run `npm run start` short alias for `npm run app-todo:start-mockapi`
- Open browser to [`http://localhost:4200`](http://localhost:4200)

## Build
- run `npm run build` to build application

## Scaffold
- For scaffold grid, update manually `./srcgen/grid.select.input.modal.json`
- run `npm run make-grid`
- reset changes on `./srcgen/grid.select.input.modal.json`
- add custom code in generated files `./src/app/todo/grids/[grid]` and `./src/app/todo/shared/[service and model]`

## Quick links

[Source](https://github.com/rucken/todo-web) - Source code.

[Rucken: Todo (Django)](https://github.com/rucken/todo-django) - Simple todo application with: auth, groups, permissions, projects, tasks, statuses (backend: Django + plugins).

## License

MIT

[travis-image]: https://travis-ci.org/rucken/todo-web.svg?branch=develop
[travis-url]: https://travis-ci.org/rucken/todo-web
