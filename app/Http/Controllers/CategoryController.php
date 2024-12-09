<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return Inertia::render('Categories/Index', [
            'categories' => $categories,
        ]);
    }

    public function create()
    {
        return Inertia::render('Categories/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'priority' => 'integer',
        ]);

        $slug = Str::slug($request->name . '-' . time());

        Category::create([
            'name' => $request->name,
            'slug' => $slug,
            'description' => $request->description,
            'priority' => $request->priority ?? 0
        ]);

        return redirect()->route('categories.index')->with('success', 'Categoría creada correctamente');
    }

    public function edit(Category $category)
    {
        return Inertia::render('Categories/Edit', [
            'category' => $category,
        ]);
    }

    public function update(Request $request, Category $category)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'priority' => 'integer',
        ]);

        $slug = Str::slug($request->name . '-' . time());

        $category->update([
            'name' => $request->name,
            'slug' => $slug,
            'description' => $request->description,
            'priority' => $request->priority ?? 0
        ]);

        return redirect()->route('categories.index')->with('success', 'Categoría actualizada correctamente');
    }

    public function destroy(Category $category)
    {
        $category->delete();
        return redirect()->route('categories.index')->with('success', 'Categoría eliminada correctamente');
    }
}
