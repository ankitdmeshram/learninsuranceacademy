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

// Route::get('/', function () {
//     return view('home');
// });
Route::get('/', [courseController::class, 'homeView']);

Route::get('/about', function () {
    return view('about');
});
// Route::get('/courses', function () {
//     return view('courses');l
// });
Route::get('/courses', [courseController::class, 'courseView']);

Route::get('/courses/{id}', [courseController::class, 'indCourseView']);

// Route::get('/courses/ind', function () {
//     return view('course-individual');
// });
