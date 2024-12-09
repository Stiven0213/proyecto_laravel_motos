<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Product extends Model
{
    // Campos que se pueden llenar masivamente
    protected $fillable = ['name', 'description', 'price', 'stock', 'category_id', 'image', 'slug'];

    // Relaciones automáticas y eventos
    protected static function boot()
    {
        parent::boot();

        // Generar slug al crear un producto
        static::creating(function ($product) {
            $product->slug = Str::slug($product->name);
        });

        // Actualizar el slug al modificar el nombre
        static::updating(function ($product) {
            if ($product->isDirty('name')) {
                $product->slug = Str::slug($product->name);
            }
        });
    }

    /**
     * Relación con la categoría
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
