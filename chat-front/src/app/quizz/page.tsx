"use client";
import Username from "@/components/Username";
import RoomChoice from "@/components/RoomChoice";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

const Quizz = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {

    socket.on("connect", () => {
      console.log("connected", socket.id);
    });


  }, []);
  

  return (
    <div>
      {username === "" ? (
        <Username socket={socket} setUsername={setUsername} />
      ) : (
        <RoomChoice socket={socket} username={username} />
        
      )}
    </div>
  );
};

export default Quizz;
