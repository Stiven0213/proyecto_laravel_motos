import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Index({ products }) {
    const { flash } = usePage().props;

    return (
        <AuthenticatedLayout>
            <div className="container mx-auto px-4 py-6">
                <Head title="Productos" />

                {/* Mensaje de éxito */}
                {flash?.success && (
                    <div className="bg-green-100 text-green-700 border border-green-300 p-3 rounded mb-6">
                        {flash.success}
                    </div>
                )}

                {/* Título y botón de acción */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-semibold text-gray-800">Productos</h1>
                    <Link
                        href="/products/create"
                        className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition duration-200"
                    >
                        Crear producto
                    </Link>
                </div>

                {/* Tabla de productos */}
                <div className="overflow-hidden rounded-lg shadow">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr className="bg-gray-100 border-b">
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                                    Nombre
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                                    Precio
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                                    Stock
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                                    Categoría
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((p, idx) => (
                                <tr
                                    key={p.id}
                                    className={`${
                                        idx % 2 === 0
                                            ? "bg-white"
                                            : "bg-gray-50"
                                    } border-b`}
                                >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                                        {p.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                        {p.price}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                        {p.stock}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                        {p.category ? p.category.name : "Sin categoría"}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                        <Link
                                            href={`/products/${p.id}/edit`}
                                            className="text-blue-600 hover:text-blue-800 transition duration-200 mr-4"
                                        >
                                            Editar
                                        </Link>
                                        <form
                                            action={`/products/${p.id}`}
                                            method="POST"
                                            className="inline"
                                        >
                                            <input
                                                type="hidden"
                                                name="_method"
                                                value="DELETE"
                                            />
                                            <input
                                                type="hidden"
                                                name="_token"
                                                value={document
                                                    .querySelector(
                                                        'meta[name="csrf-token"]'
                                                    )
                                                    .getAttribute("content")}
                                            />
                                            <button
                                                type="submit"
                                                className="text-red-600 hover:text-red-800 transition duration-200"
                                            >
                                                Eliminar
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
