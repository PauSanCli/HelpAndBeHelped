<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\EventoController;
use App\Http\Controllers\UsuariosController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::group(['middleware' => 'Cors'], function () {
//     //Rutas a las que se permitirá acceso




// });

Route::post('login', [LoginController::class, 'login'])->name('login');

Route::post('registro', [LoginController::class, 'registro'])->name('registro');

Route::get('logout', [LoginController::class, 'logout'])->name('logout');

Route::get('getEventos', [EventoController::class, 'getEventos'])->name('getEventos');

Route::get('getEvento/{id}', [EventoController::class, 'infoEvento'])->name('getEvento');

Route::post('newEvento', [EventoController::class, 'newEvento'])->name('newEvento');

Route::post('searchEvento', [EventoController::class, 'searchEvent'])->name('searchEvent');