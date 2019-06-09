'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// users are for testing purposes
Route.get('users', 'UserController.show')

Route.get('projects', 'ProjectController.index')
Route.get('projects/:id','ProjectController.show')

Route.get('tags', 'TagController.index')

// projects, automatic resourceful controller
/*
Route
  .resource('projects', 'ProjectController')
  .formats(['json'])
*/

Route.on('/').render('welcome')
