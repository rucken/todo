[![Greenkeeper badge](https://badges.greenkeeper.io/rucken/todo-web.svg)](https://greenkeeper.io/)
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Gitter][gitter-image]][gitter-url]
[![Join the chat at telegram][telegram-image]][telegram-url]


A simple todo application demonstrating the basic usage of [rucken](https://github.com/rucken).


## Usage
- Clone or fork this repository `git clone https://github.com/rucken/todo-web.git`
- Make sure you have [node.js](https://nodejs.org/) installed version 6+
- Make sure you have NPM installed version 3+
- Open comand line in folder `rucken-todo`
- run `npm install` to install project dependencies
- run `npm run app:start-dev` to fire up dev server (backend on port: 5000)
- run `npm run app:start-prod` to fire up prod server (backend on port: 5000)
- run `npm run app:start-mockapi` to fire up dev server (backend on [mockapi.io](https://www.mockapi.io/))
- Open browser to [`http://localhost:4200`](http://localhost:4200)

## Run with server side rendering
- run `npm run ssr:build-mockapi` to build application
- run `npm run ssr:start` run with ssr (backend on [mockapi.io](https://www.mockapi.io/))

## Build
- run `npm run build` to build application

## Quick links

[Source](https://github.com/rucken/todo-web) - Source code.

[Demo](https://rucken.github.io/todo-web) - Demo application with mock data worked.

[Demo (SSR)](https://rucken-todo.herokuapp.com) - Demo application with server side rendering.

[Demo source](https://github.com/rucken/core/tree/master/apps/demo) - Source code of demo application.

## Sample projects

[Rucken: Todo](https://github.com/rucken/todo-web) - Simple todo application with: projects, tasks, statuses (backend: http://mockapi.io).

[Rucken: Demo (NestJS)](https://github.com/rucken/core-nestjs) - Simple application demonstrating the basic usage of permissions with NestJS (JWT, PasswordHash, User, Group, Permission, ContentType) (backend: NestJS).

[Rucken: Todo (Django)](https://github.com/rucken/todo-django) - Simple todo application with: auth, groups, permissions, projects, tasks, statuses (backend: Django + plugins).

## License

MIT

[travis-image]: https://travis-ci.org/rucken/todo-web.svg?branch=develop
[travis-url]: https://travis-ci.org/rucken/todo-web
[gitter-image]: https://img.shields.io/gitter/room/rucken/core.js.svg
[gitter-url]: https://gitter.im/rucken/core
[npm-image]: https://badge.fury.io/js/%40rucken%2Ftodo-web.svg
[npm-url]: https://npmjs.org/package/@rucken/todo-web
[dependencies-image]: https://david-dm.org/rucken/todo-web/status.svg
[dependencies-url]: https://david-dm.org/rucken/todo-web
[telegram-image]: https://img.shields.io/badge/chat-telegram-blue.svg?maxAge=2592000
[telegram-url]: https://t.me/rucken