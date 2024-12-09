import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(window.route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout>
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-800 px-4">
                <div className="w-full max-w4-lg bg-white shadow-lg rounded-lg p-6">
                    <Head title="Registro" />

                    <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        Crear Cuenta
                    </h1>

                    <form onSubmit={submit} className="space-y-6">
                        {/* Nombre */}
                        <div>
                            <InputLabel htmlFor="name" value="Nombre" />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => setData("name", e.target.value)}
                                required
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        {/* Correo Electrónico */}
                        <div>
                            <InputLabel htmlFor="email" value="Correo Electrónico" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                autoComplete="username"
                                onChange={(e) => setData("email", e.target.value)}
                                required
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        {/* Contraseña */}
                        <div>
                            <InputLabel htmlFor="password" value="Contraseña" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                autoComplete="new-password"
                                onChange={(e) => setData("password", e.target.value)}
                                required
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        {/* Confirmar Contraseña */}
                        <div>
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="Confirmar Contraseña"
                            />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                required
                            />
                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>

                        {/* Botones */}
                        <div className="flex justify-between items-center">
                            <a
                                href={window.route("login")}
                                className="text-sm text-blue-600 hover:underline"
                            >
                                ¿Ya tienes cuenta? Inicia Sesión
                            </a>
                            <PrimaryButton
                                className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition duration-200"
                                disabled={processing}
                            >
                                Registrarse
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
