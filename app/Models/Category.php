<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Category extends Model
{
    use HasFactory;

    // Campos que se pueden llenar masivamente
    protected $fillable = ['name', 'slug', 'description', 'priority'];

    // Generar el slug automáticamente
    protected static function boot()
    {
        parent::boot();

        // Generar slug al crear una categoría
        static::creating(function ($category) {
            $category->slug = Str::slug($category->name);
        });

        // Actualizar el slug al modificar el nombre
        static::updating(function ($category) {
            if ($category->isDirty('name')) {
                $category->slug = Str::slug($category->name);
            }
        });
    }

    /**
     * Relación con los productos
     */
    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
