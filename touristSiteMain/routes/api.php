<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SystemConfigsApiController;
use App\Http\Controllers\RequestsApiController;
use App\Http\Controllers\ReviewsApiController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/users', function (Request $request) {
//     return $request->user();
// });

// Route::post('/users/register',[usersController::class, 'register']);
// Route::post('/users/login',[usersController::class, 'login']);
Route::get('/users', [UserController::class, 'index'])
                ->middleware('guest')
                ->name('index');

Route::post('/users/register', [UserController::class, 'register'])
                ->middleware('guest')
                ->name('register');

Route::post('/users/login', [UserController::class, 'login'])
                ->middleware('guest')
                ->name('login');

Route::get('/system/configs', [SystemConfigsApiController::class, 'index'])
    // ->middleware('auth:sanctum')
    ->name('index');

Route::put('/system/configs/{id}', [SystemConfigsApiController::class, 'update'])
    // ->middleware('auth:sanctum')
    ->name('update');

Route::get('/requests', [RequestsApiController::class, 'index'])
    ->middleware('auth:sanctum')
    ->name('index');

Route::post('/requests', [RequestsApiController::class, 'store'])
    ->name('store');

Route::post('/requests/update-seen-status', [RequestsApiController::class, 'update_seen_status'])
    ->middleware('auth:sanctum')
    ->name('update_seen_status');

Route::get('/reviews', [ReviewsApiController::class, 'index'])
    ->name('index');

Route::post('/reviews', [ReviewsApiController::class, 'store'])
    ->name('store');

Route::post('/reviews/show-review', [ReviewsApiController::class, 'show_review'])
    ->name('show_review');

Route::delete('/reviews', [ReviewsApiController::class, 'destroy'])
    ->name('destroy');