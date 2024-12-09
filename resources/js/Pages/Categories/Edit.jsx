import React from "react";
import { Head, useForm, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Edit({ category }) {
    const { errors } = usePage().props;

    const { data, setData, put } = useForm({
        name: category.name,
        description: category.description || "",
        priority: category.priority || 0,
    });

    function submit(e) {
        e.preventDefault();
        put(`/categories/${category.id}`);
    }

    return (
        <AuthenticatedLayout>
            <div className="container mx-auto px-4 py-6">
                <Head title="Editar Categoría" />

                <h1 className="text-3xl font-semibold text-gray-800 mb-6">
                    Editar Categoría
                </h1>

                <form onSubmit={submit} className="bg-white rounded-lg shadow p-6">
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

                    <div className="mb-6">
                        <label
                            htmlFor="priority"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Prioridad:
                        </label>
                        <input
                            id="priority"
                            type="number"
                            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                            value={data.priority}
                            onChange={(e) => setData("priority", e.target.value)}
                        />
                        {errors?.priority && (
                            <div className="text-sm text-red-600 mt-1">
                                {errors.priority}
                            </div>
                        )}
                    </div>

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
