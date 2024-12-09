import React from "react";
import { Head, useForm, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Edit({ product, categories }) {
    const { errors } = usePage().props;

    const { data, setData, put } = useForm({
        name: product.name,
        description: product.description || "",
        price: product.price,
        stock: product.stock,
        category_id: product.category_id,
        image: product.image || "", // URL de la imagen
    });

    function submit(e) {
        e.preventDefault();
        put(`/products/${product.id}`, {
            onError: (errors) => console.error("Errores:", errors),
            onSuccess: () => console.log("Producto actualizado correctamente."),
        });
    }

    return (
        <AuthenticatedLayout>
            <div className="container mx-auto px-4 py-6">
                <Head title="Editar Producto" />

                <h1 className="text-3xl font-semibold text-gray-800 mb-6">
                    Editar Producto
                </h1>

                <form onSubmit={submit} className="bg-white rounded-lg shadow p-6">
                    {/* Nombre */}
                    <div className="mb-6">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Nombre:
                        </label>
                        <input
                            id="name"
                            type="text"
                            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        {errors?.name && (
                            <div className="text-sm text-red-600 mt-1">
                                {errors.name}
                            </div>
                        )}
                    </div>

                    {/* Descripción */}
                    <div className="mb-6">
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Descripción:
                        </label>
                        <textarea
                            id="description"
                            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            value={data.description}
                            onChange={(e) => setData("description", e.target.value)}
                        ></textarea>
                        {errors?.description && (
                            <div className="text-sm text-red-600 mt-1">
                                {errors.description}
                            </div>
                        )}
                    </div>

                    {/* Precio */}
                    <div className="mb-6">
                        <label
                            htmlFor="price"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Precio:
                        </label>
                        <input
                            id="price"
                            type="number"
                            step="0.01"
                            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            value={data.price}
                            onChange={(e) => setData("price", parseFloat(e.target.value))}
                        />
                        {errors?.price && (
                            <div className="text-sm text-red-600 mt-1">
                                {errors.price}
                            </div>
                        )}
                    </div>

                    {/* Stock */}
                    <div className="mb-6">
                        <label
                            htmlFor="stock"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Stock:
                        </label>
                        <input
                            id="stock"
                            type="number"
                            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            value={data.stock}
                            onChange={(e) => setData("stock", parseInt(e.target.value, 10))}
                        />
                        {errors?.stock && (
                            <div className="text-sm text-red-600 mt-1">
                                {errors.stock}
                            </div>
                        )}
                    </div>

                    {/* Categoría */}
                    <div className="mb-6">
                        <label
                            htmlFor="category"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Categoría:
                        </label>
                        <select
                            id="category"
                            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            value={data.category_id}
                            onChange={(e) => setData("category_id", e.target.value)}
                        >
                            {categories.map((c) => (
                                <option key={c.id} value={c.id}>
                                    {c.name}
                                </option>
                            ))}
                        </select>
                        {errors?.category_id && (
                            <div className="text-sm text-red-600 mt-1">
                                {errors.category_id}
                            </div>
                        )}
                    </div>

                    {/* Imagen (URL) */}
                    <div className="mb-6">
                        <label
                            htmlFor="image"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Enlace de la imagen (URL):
                        </label>
                        <input
                            id="image"
                            type="url"
                            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            value={data.image}
                            onChange={(e) => setData("image", e.target.value)}
                        />
                        {errors?.image && (
                            <div className="text-sm text-red-600 mt-1">
                                {errors.image}
                            </div>
                        )}
                    </div>

                    {/* Botón */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-green-600 text-white px-4 py-2 rounded-md shadow hover:bg-green-700 transition duration-200"
                        >
                            Actualizar
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
