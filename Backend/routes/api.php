<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\LecturerController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\MarkController;
use App\Http\Controllers\LecturerCourseController;
use App\Http\Controllers\NotificationController;


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
//public routes
Route::apiResource('/Student',StudentController::class);
Route::apiResource('/Lecturer',LecturerController::class);
Route::apiResource('/Admin',AdminController::class);
Route::get('/Admin/{admin}',[AdminController::class,'show']);
Route::apiResource('/Course',CourseController::class);
Route::put('/Course/{course}',[CourseController::class,'update']);
Route::apiResource('/LecturerCourse',LecturerCourseController::class);
Route::get('/Mark/Results',[MarkController::class,'getResults']);
Route::apiResource('/Mark',MarkController::class);
Route::put('/AddMarks',[MarkController::class,'update']);
Route::get('/Mark/ViewResults/{id}',[MarkController::class,'viewResults']);

Route::get('/CountStudents',[MarkController::class,'countStudents']);
Route::get('/CheckCourseLimits',[CourseController::class,'checkCourseLimits']);

Route::get('/GetStudentsAsLecturer/{id}',[MarkController::class,'showAsLecturer']);
Route::get('/GetStudentsAsAdmin',[MarkController::class,'showAsAdmin']);
Route::post('/Login1',[LoginController::class,'login']);

Route::get('/Notification',[NotificationController::class,'getNotifications']);