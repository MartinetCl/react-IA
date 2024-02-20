
import { useRouter } from "next/router";
import React, { useState } from 'react';


export default function Component() {
  const router = useRouter();
  const [difficulty, setDifficulty] = React.useState('1');
  const handleStartQuiz = () => {
    router.push(`/Quizztimer?difficulty=${difficulty}`);
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="flex h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
        <a className="flex items-center gap-2 font-semibold cursor-pointer" onClick={() => router.push('/')}>
          <Package2Icon className="h-6 w-6" />
          <span>Quizz app </span>
        </a>
        <button className="ml-auto h-8 w-8 bg-black text-white flex justify-center items-center" onClick={handleStartQuiz}>
          <BellIcon className="h-4 w-4" />
          <span className="sr-only">Notifications</span>
        </button>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex items-center">
          <h1 className="font-semibold text-lg md:text-2xl">Choisissez un sujet de quiz</h1>
        </div>
        <div className="flex items-center justify-between">

          <div>
            <label htmlFor="difficulty-select" className="mr-2">Difficulté :</label>
            <select
              id="difficulty-select"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="1">Niveau 1</option>
              <option value="2">Niveau 2</option>
              <option value="3">Niveau 3</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Quiz de Géographie", description: "Ce quiz testera vos connaissances en géographie." },
            { title: "Quiz d'Histoire", description: "Ce quiz testera vos connaissances en histoire." },
            { title: "Quiz de Sciences", description: "Ce quiz testera vos connaissances en sciences." },
            { title: "Quiz de Mathématiques", description: "Ce quiz testera vos connaissances en mathématiques." },
            { title: "Quiz de Littérature", description: "Ce quiz testera vos connaissances en littérature." },
            { title: "Quiz d'Art", description: "Ce quiz testera vos connaissances en art." }
          ].map((quiz, index) => (
            <div key={index} className="border border-solid shadow-sm rounded-lg border-gray-300 dark:border-gray-700 rounded-2xl">
              <div className="p-4">
                <h2 className="text-xl font-semibold">{quiz.title}</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">{quiz.description}</p>
                <button className="mt-4 bg-black text-white py-2 px-4 rounded-lg" onClick={handleStartQuiz}>Commencer le Quiz</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}
