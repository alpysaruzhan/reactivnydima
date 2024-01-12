import React, { useState, useEffect } from 'react';
import './ChatPage.css';
import AllChat from "./AllChat/AllChat";
import ChatUs from "./ChatUs/ChatUs";
import { AuthApi, ChatApi, MessageApi, UsersApi } from 'market_place';
import { Instance } from '../GateWay/base';

const ChatPage = (props) => {
  // chatId = React.useParams();
  const [currChat, setCurrChat] = useState(null);
  const Chat = new ChatApi(Instance);
  const Message = new MessageApi(Instance);
  const Users = new UsersApi(Instance);

  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState(null);
  const [user, setUser] = useState([]);
  const [chatObj, setChatObj] = useState([]);

  useEffect(() => {
    if (currChat != null) {
      console.log("currChat", currChat);
      Chat.chatGetChatMessagesApiV1ChatChatIdMessagesGet(currChat.id, { start: 0, end: 10 }, (error, data, response) => {
        if (error) {
          console.error(error);
        } else {
          setMessages(data.objects);
          console.log("Fetched messages jopa:", data);
        }
      });
    }

  }, [currChat])
  useEffect(() => {
    // Users.usersCurrentUserApiV1UsersMeGet((error, data, reponse) => {
    //   if (error) {
    //     console.error(error)
    //   } else {
    //     setUser(data)
    //   }
    // });

    Chat.chatGetChatsApiV1ChatGet((error, data, response) => {
      if (error) {
        console.error(error);
      } else {
        // console.log("Fetched chats bebra:", data);
        setChats(data.objects);
        // data.objects.forEach((v) => {
        //   if (v.id === chatId) {
        //     setChatObj(v)
        //   }
        // }) 
      }
    });

  }, [])

  // console.log("chatObj",  chatObj);
  // console.log("chats", chats );
  // console.log("messages", messages );
  // console.log("user", user );

  return (

    <div className='ChatPage'>
      <div className='AllChat'>
        <AllChat setCurrChat={setCurrChat} chats={chats} />
      </div>
      <div className='ChatUs'>
        {currChat != null && messages != null ? <ChatUs currChat={currChat} messages={messages} /> : <h1>НЕТ ЧАТОВ!</h1>}
      </div>
    </div>
  );
};

export default ChatPage;
