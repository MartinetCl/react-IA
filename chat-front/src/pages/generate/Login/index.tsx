
import React from "react";
import { useRouter } from "next/router"; // Importez useRouter

const Component: React.FC = () => {
    const router = useRouter(); // Utilisez useRouter

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Empêchez le rechargement de la page
        router.push('/room'); // Redirigez vers /room avec Next.js router
    };



    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-lg shadow-md">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Bienvenue sur Quizz
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Entrez votre pseudo ou votre code d'accés
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="username" className="sr-only">Username</label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                autoComplete="username"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Entrez votre pseudo"
                            />
                        </div>

                    </div>
                    <p className="mt-2 text-center text-sm text-gray-600">Ou </p>

                    <div>
                        <label htmlFor="username" className="sr-only">Username</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            autoComplete="username"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Entrez vos code d'accés pour une room"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                        >
                            Accedez
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Component;