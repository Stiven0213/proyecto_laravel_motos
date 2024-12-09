<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductPublicController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Auth;

// Redirigir la página principal al login si no está autenticado
Route::get('/', function () {
    if (Auth::check()) {
        return redirect()->route('catalog');
    }
    return redirect()->route('login');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/catalog', [HomeController::class, 'index'])->name('catalog');
    Route::resource('categories', CategoryController::class)->except(['show']);
    Route::resource('products', ProductController::class)->except(['show']);
});

// Rutas públicas (actualmente solo el detalle del producto si es necesario)
Route::get('/products/{slug}', [ProductPublicController::class, 'show']);


// Rutas de autenticación (Laravel Breeze)
require __DIR__.'/auth.php';
