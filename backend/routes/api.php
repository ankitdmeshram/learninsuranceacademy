<?php

use App\Http\Controllers\courseController;
use App\Http\Controllers\userController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('signup', [userController::class, 'signUp']);
Route::post('signin', [userController::class, 'signIn']);
Route::get('users', [userController::class, 'users']);
Route::post('updateuser', [userController::class, 'updateUser']);

Route::post('courses', [courseController::class, 'courses']);
Route::post('addcourse', [courseController::class, 'addCourse']);
Route::post('updatecourse', [courseController::class, 'updateCourse']);
Route::post('deletecourse', [courseController::class, 'deleteCourse']);

Route::get('lessons', [courseController::class, 'lessons']);
Route::post('addlesson', [courseController::class, 'addLesson']);
Route::post('updatelesson', [courseController::class, 'updateLesson']);
Route::post('deletelesson', [courseController::class, 'deleteLesson']);

Route::post('myorders', [courseController::class, 'myOrders']);
