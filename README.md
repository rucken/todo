# rucken-todo

[![Greenkeeper badge](https://badges.greenkeeper.io/rucken/todo-web.svg)](https://greenkeeper.io/)
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Gitter][gitter-image]][gitter-url]
[![Join the chat at telegram][telegram-image]][telegram-url]


A simple todo application demonstrating the basic usage of [rucken](https://github.com/rucken).

## Usage
- Clone or fork this repository `git clone https://github.com/rucken/todo.git`
- Make sure you have [node.js](https://nodejs.org/) installed version 6+
- Make sure you have NPM installed version 3+
- Open comand line in folder `rucken-todo`
- run `npm install` to install project dependencies
- run `npm run app:start-dev` to fire up dev server (backend on environment.apiUrl)
- run `npm run app:start-prod` to fire up prod server (backend on environment.prod.apiUrl)
- run `npm run app:start-mockapi` to fire up dev server (backend on environment.mockapi.apiUrl)
- Open browser to [`http://localhost:4200`](http://localhost:4200)

## Run with server side rendering (prod)
- run `npm run ssr:build-prod` to build application
- run `npm run ssr:start` run with ssr (backend on environment.prod.apiUrl)
- Open browser to [`http://localhost:4200`](http://localhost:4200)

## Run with server side rendering
- run `npm run ssr:build-mockapi` to build application
- run `npm run ssr:start` run with ssr (backend on environment.mockapi.apiUrl)
- Open browser to [`http://localhost:4200`](http://localhost:4200)

## Build
- run `npm run build` to build libs and application

## Quick links

[Live demo](https://rucken.github.io/todo) [[source]](https://github.com/rucken/todo) - Demo application (backend: http://www.mockapi.io).

[Live demo (SSR)](https://rucken-todo.herokuapp.com) [[source]](https://github.com/rucken/todo) - Demo application with server side rendering (backend: http://www.mockapi.io).

[Live demo (NestJS)](https://rucken-todo-nestjs.herokuapp.com) [[source]](https://github.com/rucken/todo-nestjs) - Demo application with live backend (backend: https://nestjs.com).

## License

MIT

[travis-image]: https://travis-ci.org/rucken/todo.svg?branch=develop
[travis-url]: https://travis-ci.org/rucken/todo
[gitter-image]: https://img.shields.io/gitter/room/rucken/todo.js.svg
[gitter-url]: https://gitter.im/rucken/todo
[npm-image]: https://badge.fury.io/js/%40rucken%2Ftodo-web.svg
[npm-url]: https://npmjs.org/package/@rucken/todo-web
[dependencies-image]: https://david-dm.org/rucken/todo-web/status.svg
[dependencies-url]: https://david-dm.org/rucken/todo-web
[telegram-image]: https://img.shields.io/badge/chat-telegram-blue.svg?maxAge=2592000
[telegram-url]: https://t.me/rucken