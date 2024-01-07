import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ChatPage.css';
import { ChatApi } from 'market_place';
import { Instance } from '../GateWay/base';

const ChatPage = (props) => {
  const { Cookies } = props; 
  const [chats, setChats] = useState([]);
  const { chatId } = useParams();
  const Chat = new ChatApi(Instance);

  useEffect(() => {
    Chat.chatGetChatsApiV1ChatGet((error, data, response) => {
      if (error) {
        if (response.statusCode) {
          console.error(error);
        } else { 
          console.error("Упс, произошла внутренняя ошибка");
        }
      } else {
        console.log("Fetched data:", data);
        setChats(data.objects);
      }
    });
  }, []);

  return (
    <div>
      <div className="chat-container">
        {Array.isArray(chats) && chats.map((chat) => (
          <div key={chat.id} className={`chat ${chatId === String(chat.id) ? 'active-chat' : ''}`}>
          <div className='mess'>
          <Link to={`/chat/${chat.id}`}>
          <h3>Чат {chat.id}</h3>
            <div className="message-container">
              <div className='mess1'>
                {chat.lastMessage}
              </div>
            </div>
          </Link>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatPage;
