import { useEffect, useState } from 'react';

const Receive = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3000');

    socket.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };
  }, []);

  return (
    <div className="container">
      <h1>Received Messages</h1>
      <div id="messages">
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
        #messages {
          margin-top: 20px;
          width: 300px;
        }
        p {
          background-color: #e7f3ff;
          padding: 10px;
          border: 1px solid #007bff;
          border-radius: 5px;
          margin: 5px 0;
        }
      `}</style>
    </div>
  );
};

export default Receive;
