import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { useForm } from "@inertiajs/react";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth?.user;
    const { post } = useForm();

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-3">
                        {/* Logo */}
                        <div className="flex items-center space-x-4">
                            <Link
                                href="/catalog"
                                className="flex items-center space-x-2"
                            >
                                <ApplicationLogo className="h-8 w-8 text-white" />
                                <span className="text-lg font-bold tracking-wide">
                                    Tienda Motocicletas
                                </span>
                            </Link>

                            {/* Navbar Links */}
                            <div className="hidden md:flex space-x-6">
                                <Link
                                    href="/catalog"
                                    className="hover:text-blue-300 transition duration-200"
                                >
                                    Catálogo
                                </Link>
                                <Link
                                    href="/categories"
                                    className="hover:text-blue-300 transition duration-200"
                                >
                                    Categorías
                                </Link>
                                <Link
                                    href="/products"
                                    className="hover:text-blue-300 transition duration-200"
                                >
                                    Productos
                                </Link>
                            </div>
                        </div>

                        {/* User Menu */}
                        <div className="relative">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (prev) => !prev
                                    )
                                }
                                className="flex items-center space-x-2 bg-blue-700 px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200 focus:outline-none"
                            >
                                {user?.name}
                                <svg
                                    className={`h-4 w-4 transform ${
                                        showingNavigationDropdown
                                            ? "rotate-180"
                                            : "rotate-0"
                                    } transition duration-200`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {/* Dropdown */}
                            {showingNavigationDropdown && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">

                                    <button
                                        onClick={() => post(route("logout"))} // Usar POST en lugar de GET
                                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    >
                                        Cerrar Sesión
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Header */}
            {header && (
                <header className="bg-white shadow">
                    <div className="container mx-auto px-4 py-6">{header}</div>
                </header>
            )}

            {/* Content */}
            <main className="container mx-auto px-4 py-6">{children}</main>
        </div>
    );
}
