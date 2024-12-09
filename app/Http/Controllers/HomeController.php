<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        $products = Product::all();
        return Inertia::render('Home/Index', [
            'categories' => $categories,
            'products' => $products
        ]);
    }
}
