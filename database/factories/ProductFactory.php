<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Category;

class ProductFactory extends Factory
{
    public function definition(): array
    {
        $name = $this->faker->words(3, true);
        return [
            'name' => ucfirst($name),
            'slug' => Str::slug($name.'-'.$this->faker->unique()->numberBetween(1,1000)),
            'description' => $this->faker->paragraph(),
            'price' => $this->faker->randomFloat(2, 100, 10000),
            'stock' => $this->faker->numberBetween(0,100),
            'image' => $this->faker->imageUrl(640, 480, 'motorcycle', true),
            'category_id' => Category::factory()
        ];
    }
}
