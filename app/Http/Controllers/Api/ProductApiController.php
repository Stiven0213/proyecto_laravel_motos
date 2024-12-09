<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductApiController extends Controller
{
    public function index()
    {
        return response()->json(Product::with('category')->get(), 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'stock' => 'required|integer',
            'category_id' => 'required|exists:categories,id',
        ]);

        $product = Product::create($request->all());

        return response()->json(['message' => 'Product created', 'data' => $product], 201);
    }

    public function show(Product $product)
    {
        $product->load('category');
        return response()->json($product, 200);
    }

    public function update(Request $request, Product $product)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'stock' => 'required|integer',
            'category_id' => 'required|exists:categories,id',
        ]);

        $product->update($request->all());

        return response()->json(['message' => 'Product updated', 'data' => $product], 200);
    }

    public function destroy(Product $product)
    {
        $product->delete();

        return response()->json(['message' => 'Product deleted'], 200);
    }
}

