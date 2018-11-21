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

Route.on('/').render('welcome')
Route.on('/home').render('home')
Route.get('/test', () => 'Hello World')

Route.get('/test2', function(){
    return 'Hello World 2';
})

Route.get('/test/:id', function ({params}) {
    return `it's id  ${params.id} `; 
})

// using controllers
Route.get('/posts', 'PostController.index')
