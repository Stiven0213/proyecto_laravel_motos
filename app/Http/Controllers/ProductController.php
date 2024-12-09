<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with('category')->get();
        return Inertia::render('Products/Index', [
            'products' => $products,
        ]);
    }

    public function create()
    {
        $categories = Category::all();
    
        // Verificar en los logs si se están enviando las categorías correctamente
        logger()->info('Categorías disponibles:', $categories->toArray());
    
        return Inertia::render('Products/Create', [
            'categories' => $categories,
        ]);

    }
    
    public function store(Request $request)
{
    $request->validate([
        'name' => 'required|string|max:255',
        'description' => 'nullable|string',
        'price' => 'required|numeric|min:0',
        'stock' => 'required|integer|min:0',
        'category_id' => 'required|exists:categories,id',
        'image' => 'nullable|string|max:255',
    ]);

    Product::create([
        'name' => $request->name,
        'slug' => Str::slug($request->name),
        'description' => $request->description,
        'price' => $request->price,
        'stock' => $request->stock,
        'category_id' => $request->category_id,
        'image' => $request->image,
    ]);

    return redirect()->route('products.index')->with('success', 'Producto creado correctamente.');
}

    public function edit(Product $product)
    {
        $categories = Category::all();
        return Inertia::render('Products/Edit', [
            'product' => $product,
            'categories' => $categories
        ]);
    }

    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'stock' => 'required|integer',
            'category_id' => 'required|exists:categories,id',
            'image' => 'nullable|url', // Validar como URL
        ]);
    
        $product->update($validated);
    
        return redirect()->route('products.index')->with('success', 'Producto actualizado correctamente.');
    }
    
    public function destroy(Product $product)
    {
        $product->delete();
        return redirect()->route('products.index')->with('success', 'Producto eliminado correctamente');
    }
}
