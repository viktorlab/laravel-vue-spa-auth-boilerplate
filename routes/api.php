<?php

use App\Http\Controllers\Api\AbilitiesApiController;
use App\Http\Controllers\Api\PermissionsApiController;
use App\Http\Controllers\Api\RolesApiController;
use App\Http\Controllers\Api\UsersApiController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/abilities', [AbilitiesApiController::class, 'index']);
    Route::apiResource('permissions', PermissionsApiController::class);
    Route::apiResource('roles', RolesApiController::class);
    Route::apiResource('users', UsersApiController::class);
});
