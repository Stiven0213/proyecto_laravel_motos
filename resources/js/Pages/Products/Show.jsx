import React from 'react';
import { Head } from '@inertiajs/react';

export default function Show({ product }) {
    return (
        <div className="container mx-auto p-4">
            <Head title={product.name} />
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
            {product.image && (
                <img src={`/storage/${product.image}`} alt={product.name} className="mb-4 w-full max-w-sm object-cover" />
            )}
            <p className="mb-2">Precio: {product.price} USD</p>
            <p className="mb-2">Stock: {product.stock}</p>
            <p className="mb-4">Descripción: {product.description}</p>
            <a href="/" className="text-blue-500 hover:underline">Volver al catálogo</a>
        </div>
    );
}
