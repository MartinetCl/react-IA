
import React from "react";

const Component: React.FC = () => {
    return (


        <div className="flex flex-col h-screen">
            <header className="flex h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
                <a className="flex items-center gap-2 font-semibold" href="#">

                    <span>Acme Inc</span>
                </a>
                <button>Toggle notifications</button>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                <div className="flex items-center">
                    <h1 className="font-semibold text-lg md:text-2xl">Choose a Quiz Topic</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Quiz topic cards here */}
                    {/* Repeat this block for each quiz topic */}
                    <div className="border shadow-sm rounded-lg">
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">Geography Quiz</h2>
                            <p className="mt-2 text-gray-500 dark:text-gray-400">This quiz will test your knowledge of geography.</p>
                            <button>Start Quiz</button>
                        </div>
                    </div>
                    {/* Other quiz topics... */}
                </div>
            </main>
        </div>


    );
};

export default Component;
