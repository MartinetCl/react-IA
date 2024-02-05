/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6Y1PyKAWTwl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
            <div className="flex flex-col w-3/4">
                <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 border-b">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Quiz App</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-800 dark:text-gray-200">Time Remaining:</span>
                        <span className="text-lg font-bold text-red-500 dark:text-red-400">10:00</span>
                    </div>
                </header>
                <main className="flex-1 overflow-y-auto p-6">
                    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">Round 1</h2>
                        <p className="text-gray-600 dark:text-gray-400">What is the capital of France?</p>
                        <div className="flex flex-col gap-4">
                            <input
                                className="py-2 px-4 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200"
                                placeholder="Type your answer here"
                                type="text"
                            />
                            <button className="py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-white">Envoyer </button>
                        </div>
                    </div>
                </main>
                <footer className="flex items-center justify-center py-4 bg-white dark:bg-gray-800 border-t">
                    <button className="py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-white">Next Round</button>
                </footer>
            </div>
            <div className="flex flex-col w-1/4 bg-white dark:bg-gray-800 border-l">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 px-6 py-4 border-b">Leaderboard</h2>
                <div className="flex-1 overflow-y-auto p-6">
                    <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-800 dark:text-gray-200">Player 1</span>
                        <span className="text-gray-800 dark:text-gray-200">Score: 10</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-800 dark:text-gray-200">Player 2</span>
                        <span className="text-gray-800 dark:text-gray-200">Score: 8</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

