import { useState } from 'react';

const Home = () => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    const socket = new WebSocket('ws://localhost:3000');

    socket.onopen = () => {
      socket.send(message);
    };
  };

  return (
    <div className="container">
      <h1>Send a Message</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
        required
      />
      <button onClick={sendMessage}>Send</button>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
        input {
          margin: 10px 0;
          padding: 10px;
          width: 300px;
        }
        button {
          padding: 10px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default Home;
