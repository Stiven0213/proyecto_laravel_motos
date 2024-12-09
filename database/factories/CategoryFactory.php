<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class CategoryFactory extends Factory
{
    public function definition(): array
    {
        $name = $this->faker->word();
        return [
            'name' => ucfirst($name),
            'slug' => Str::slug($name.'-'.$this->faker->unique()->numberBetween(1,1000)),
            'description' => $this->faker->sentence(),
            'priority' => $this->faker->numberBetween(0,10),
        ];
    }
}
