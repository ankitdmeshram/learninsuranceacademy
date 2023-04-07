<?php

use App\Http\Controllers\courseController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', [courseController::class, 'homeView']);

Route::get('/about', function () {
    return view('about');
});

Route::get('/courses', [courseController::class, 'courseView']);
Route::get('/courses', [courseController::class, 'courseView']);

Route::get('/courses/{id}', [courseController::class, 'indCourseView']);

Route::get('/contact', [courseController::class, 'contactView']);

Route::get('/initiate', 'App\Http\Controllers\OrderController@initiate')->name('initiate.payment');

Route::post('/payment','App\Http\Controllers\OrderController@pay')->name('make.payment');
Route::post('/payment/status', 'App\Http\Controllers\OrderController@paymentCallback')->name('status');

// Route::post('order', 'App\Http\Controllers\OrderController@paymentCallback')->name('status');
