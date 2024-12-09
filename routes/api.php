<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CategoryApiController;
use App\Http\Controllers\Api\ProductApiController;

// Rutas API para categorías y productos
Route::apiResource('categories', CategoryApiController::class);
Route::apiResource('products', ProductApiController::class);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
