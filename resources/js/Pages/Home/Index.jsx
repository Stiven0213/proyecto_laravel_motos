import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Index({ categories, products }) {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Filtrar productos según la categoría seleccionada
    const filteredProducts = selectedCategory
        ? products.filter((product) => product.category_id === selectedCategory)
        : products;

    return (
        <AuthenticatedLayout>
            <div className="container mx-auto px-4 py-6">
                <Head title="Catálogo de Motocicletas" />

                {/* Título del Catálogo */}
                <h1 className="text-3xl font-semibold text-gray-800 mb-6">
                    Catálogo de Motocicletas
                </h1>

                {/* Categorías */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Categorías
                    </h2>
                    <ul className="flex flex-wrap gap-4">
                        <li>
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className={`text-blue-600 hover:text-blue-800 underline ${
                                    selectedCategory === null
                                        ? "font-bold"
                                        : ""
                                }`}
                            >
                                Todas
                            </button>
                        </li>
                        {categories.map((cat) => (
                            <li key={cat.id}>
                                <button
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`text-blue-600 hover:text-blue-800 underline ${
                                        selectedCategory === cat.id
                                            ? "font-bold"
                                            : ""
                                    }`}
                                >
                                    {cat.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Productos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            {product.image && (
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover"
                                />
                            )}
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    {product.name}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {product.price} USD
                                </p>
                                <a
                                    href={`/products/${product.slug}`}
                                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
                                >
                                    Ver más
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
