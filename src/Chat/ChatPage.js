import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ChatPage.css';

const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const { chatId } = useParams();

  useEffect(() => {
    fetch('./dg.json')
      .then((response) => response.json())
      .then((data) => {
        setChats(data.chats);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке чатов:', error);
      });
  }, []);

  return (
    <div>
      <div className="chat-container">
        {chats.map((chat) => (
          <div key={chat.id} className={`chat ${chatId === String(chat.id) ? 'active-chat' : ''}`}>
            <h3>Чат {chat.id}</h3>
            <div className="message-container">
              {chat.messages.map((message, index) => (
                <div
                  key={index}
                  className={`message ${message.isUser ? 'user-message' : 'response-message'}`}
                >
                  <strong>{message.user}:</strong> {message.text}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatPage;
