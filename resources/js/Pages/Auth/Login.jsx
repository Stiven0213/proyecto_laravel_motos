import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(window.route("login"), { onFinish: () => reset("password") });
    };

    return (
        <GuestLayout>
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-800 px-4">
                <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
                    <Head title="Iniciar Sesión" />

                    {/* Estado de la sesión */}
                    {status && (
                        <div className="mb-4 text-sm text-green-600">{status}</div>
                    )}

                    <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        Bienvenido de Nuevo
                    </h1>

                    <form onSubmit={submit} className="space-y-6">
                        {/* Email */}
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
                                autoComplete="current-password"
                                onChange={(e) => setData("password", e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        {/* Recordar */}
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData("remember", e.target.checked)
                                }
                                className="form-checkbox rounded text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm text-gray-600">
                                Recordarme
                            </span>
                        </div>

                        {/* Enlace de recuperación */}
                        {canResetPassword && (
                            <div className="text-right">
                                <a
                                    href={window.route("password.request")}
                                    className="text-sm text-blue-600 hover:underline"
                                >
                                    ¿Olvidaste tu contraseña?
                                </a>
                            </div>
                        )}

                        {/* Botones */}
                        <div className="flex justify-between items-center">
                            <a
                                href={window.route("register")}
                                className="text-sm text-blue-600 hover:underline"
                            >
                                ¿No tienes cuenta? Regístrate
                            </a>
                            <PrimaryButton
                                className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition duration-200"
                                disabled={processing}
                            >
                                Iniciar Sesión
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
