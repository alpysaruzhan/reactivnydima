import React, { useState, useEffect } from 'react';
import './ChatPage.css';
import AllChat from "./AllChat/AllChat";
import ChatUs from "./ChatUs/ChatUs";
import { AuthApi, ChatApi, MessageApi, UsersApi } from 'market_place';
import { Instance } from '../GateWay/base';

const ChatPage = (props) => {
  const [currChat, setCurrChat] = useState(null);
  const Chat = new ChatApi(Instance);
  const Message = new MessageApi(Instance);
  const Users = new UsersApi(Instance);

  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState(null);
  const [user, setUser] = useState([]);
  const [chatObj, setChatObj] = useState([]);



  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  const [isDivVisible, setDivVisibility] = useState(true);
  const [isMobile, setIsMobile] = useState((windowWidth < 1000));

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      setIsMobile(window.innerWidth < 1000)

    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  useEffect(() => {
    if (currChat != null) {
      console.log("currChat", currChat);
      Chat.chatGetChatMessagesApiV1ChatChatIdMessagesGet(currChat.id, { start: 0, end: 10 }, (error, data, response) => {
        if (error) {
          console.error(error);
        } else {
          setMessages(data.objects);
          if (isMobile) {
            setDivVisibility(!isDivVisible);
          }
          console.log("Fetched messages jopa:", data);
        }
      });
    }

  }, [currChat])
  useEffect(() => {

    Chat.chatGetChatsApiV1ChatGet((error, data, response) => {
      if (error) {
        console.error(error);
      } else {
        setChats(data.objects);
      }
    });

  }, [])



  return (

    <div className='ChatPage'>
      <div className='AllChat ' style={{ display: !isDivVisible && isMobile ? 'none' : 'block' }}>
        <h1 className='AllChat-h1'>Мессенджер</h1>
        <AllChat setCurrChat={setCurrChat} chats={chats} />
      </div>
      <div className='ChatUs' style={{ display: isDivVisible && isMobile ? 'none' : 'block' }}>
        {currChat != null && messages != null ? <ChatUs isDivVisible={isDivVisible} toggleVisibility={() => setDivVisibility(!isDivVisible)} currChat={currChat} messages={messages} /> : <h1>НЕТ ЧАТОВ!</h1>}
      </div>
    </div>
  );
};

export default ChatPage;
