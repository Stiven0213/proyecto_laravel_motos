import React from "react";
import { Head, useForm, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Create({ categories }) {
    const { errors } = usePage().props;

    const { data, setData, post } = useForm({
        name: "",
        description: "",
        price: "",
        stock: "",
        category_id: categories.length > 0 ? categories[0].id : "",
        image_url: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/products");
    }

    return (
        <AuthenticatedLayout>
            <div className="container mx-auto px-4 py-6">
                <Head title="Crear Producto" />
                <h1 className="text-3xl font-semibold text-gray-800 mb-6">
                    Crear Producto
                </h1>

                <form
                    onSubmit={submit}
                    className="bg-white rounded-lg shadow p-6"
                >
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
                            onChange={(e) => setData("price", e.target.value)}
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
                            onChange={(e) => setData("stock", e.target.value)}
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

                    {/* Imagen */}
                    <div className="mb-6">
                        <label
                            htmlFor="image_url"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            URL de la Imagen:
                        </label>
                        <input
                            id="image_url"
                            type="text"
                            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            value={data.image_url}
                            onChange={(e) => setData("image_url", e.target.value)}
                        />
                        {errors?.image_url && (
                            <div className="text-sm text-red-600 mt-1">
                                {errors.image_url}
                            </div>
                        )}
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-green-600 text-white px-4 py-2 rounded-md shadow hover:bg-green-700 transition duration-200"
                        >
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
