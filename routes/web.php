<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventsController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\ItemsController;
use App\Http\Controllers\GithubSearchController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return redirect()->route('events.show');
});

Route::get('/events/show', [EventsController::class, 'show'])->name('events.show');
Route::get('/events/edit/{id}', [EventsController::class, 'edit']);
Route::post('/events/update', [EventsController::class, 'update']);

Route::get('/events/add', [EventsController::class, 'add']);
Route::post('/events/create', [EventsController::class, 'create']);

Route::get('/events/list/{pageNo}', [EventsController::class, 'list'])->name('events.list');


Route::get('/game', [GameController::class, 'gameBoard']);
Route::get('/github-search', [GithubSearchController::class, 'index']);

