<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Product;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Crear un usuario administrador para el acceso
        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
            // La contraseña se establecerá luego con breeze o se deja por defecto
            'password' => bcrypt('password')
        ]);

        // Crear categorías y productos
        // Creará 5 categorías y para cada una, 10 productos
        Category::factory(5)->create()->each(function($category) {
            Product::factory(10)->create(['category_id' => $category->id]);
        });
    }
}
