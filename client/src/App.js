import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:3001");

function App() {
  const [message, setMessage] = useState("");
  const [messageReceive, setMessageReceive] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (room != null) {
      socket.emit("join_room", room);
    }
  };

  const sentMessage = () => {
    socket.emit("send_message", { message, room });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceive(data.message);
    });
  }, [socket]);

  return (
    <div className="App">
      <input
        placeholder="room numver"
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button onClick={joinRoom}>Join Room</button>
      <input
        placeholder="Message"
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button onClick={sentMessage}>Send a message</button>
      <h1>Message:</h1>
      <p>{messageReceive}</p>
    </div>
  );
}

export default App;
