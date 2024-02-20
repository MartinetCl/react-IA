import { useState } from "react";
import { Socket } from "socket.io-client";
import { Button } from "@/components/ui/button"

interface Props {
  socket: Socket;
  setUsername: (username: string) => void;
}

const Username = ({ socket, setUsername }: Props) => {
  const [text, setText] = useState("");  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(text !== ""){
      setUsername(text);
      socket.emit("username-set", {
      username: text,
    });
    } else {
      window.alert("saisissez un username")
    };
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
                        value={text}
                        autoComplete="username"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Entrez votre pseudo"
                        onChange={(e) => setText(e.target.value)}
                    />
                </div><br></br>

                <Button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                    Let's play
                </Button>
            </div>
        </form>
    </div>
  </div>
  );
};

export default Username;
