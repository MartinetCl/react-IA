import { useState } from "react";
import { Socket } from "socket.io-client";

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
    <div className="h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} >
        <label>Feature : </label><br></br>
        <label>Connect</label><br></br>

        <input type="text" value={text} placeholder="username" className="input input-bordered input-primary w-full max-w-xs" onChange={(e) => setText(e.target.value) }/> 
       
        <div className="flex items-center justify-center m-5">
          <button className="btn btn-outline btn-primary flex items-center">Let's play !</button>
        </div>

      </form>
    </div>  
  );
};

export default Username;
