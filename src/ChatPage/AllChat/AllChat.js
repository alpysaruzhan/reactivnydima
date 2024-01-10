import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './AllChat.css';
import { ChatApi } from 'market_place';
import { Instance } from '../../GateWay/base';

const AllChat = (props) => {
  const { Cookies } = props;
  const [chats, setChats] = useState([]);
  const { chatId } = useParams();
  const Chat = new ChatApi(Instance);

  useEffect(() => {
    Chat.chatGetChatsApiV1ChatGet((error, data, response) => {
      if (error) {
        console.error(error);
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
                <h3>Чаффт {chat.id}</h3>
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

export default AllChat;
