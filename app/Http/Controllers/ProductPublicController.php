<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Inertia\Inertia;

class ProductPublicController extends Controller
{
    public function show($slug)
    {
        $product = Product::where('slug', $slug)->firstOrFail();
        return Inertia::render('Products/Show', [
            'product' => $product
        ]);
    }
}
