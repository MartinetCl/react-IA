import { useState } from 'react';
import { useRouter } from 'next/router';
import { Socket } from 'socket.io-client';
import { Button } from './ui/button';
import Link from 'next/link';

interface Props {
  socket: Socket;
  username: string;
}

const CreateRoom = ({ socket, username }: Props) => {
  const [privateRoomCode, setPrivateRoomCode] = useState('');
  const router = useRouter();

  const createPrivateRoom = () => {
    socket.emit('createPrivateRoom', { username }, (roomId: string) => {
      alert(`Votre room privée a été créée avec l'ID : ${roomId}`);
      // Rediriger l'utilisateur vers la nouvelle room créée
      router.push(`/room/${roomId}`);
    });
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="flex h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
        <Link href="#" className="flex items-center gap-2 font-semibold">
          {/* ... (rest of your Link component) */}
        </Link>
        <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
          {/* ... (rest of your Button component) */}
        </Button>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex items-center">
          <h1 className="font-semibold text-lg md:text-2xl">Créer une Room privée</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border shadow-sm rounded-lg">
            <div className="p-4">
              <h2 className="text-xl font-semibold">Créer une Room privée</h2>
              <Button className="mt-4" onClick={createPrivateRoom}>
                Créer et obtenir l'ID
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateRoom;