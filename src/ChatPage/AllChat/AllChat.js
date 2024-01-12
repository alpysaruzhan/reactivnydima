import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './AllChat.css';


import youtube from "../../img/footer/YouTubelogo.png";

const AllChat = (props) => {
  const { Cookies } = props;
  const [chats, setChats] = useState([]);
  const { chatId } = useParams();

  


  const handleClick = (chat) => {
    console.log("handleClick");
    props.setCurrChat(chat);
  }

  return (
    <div>

      <div className="chat-container">
        <div className="chat chat-pined" onClick={() => handleClick("chat")}>
          <div className="chat-img-div">
            <img src={youtube} className="chat-img" />
          </div>
          <div className="chat-mid">
            <span className="chat-name">Game Hub</span >
            <span className="chat-last">Здравствуйте, я...</span >
          </div>
          <span className="chat-time">11:00</span >
        </div>


      

        {Array.isArray(props.chats) && props.chats.map((chat) => (

          <div key={chat.id} className={`chat ${chatId === String(chat.id) ? 'active-chat' : ''}`} onClick={() => handleClick(chat)}>

            <div className="chat-div">
              <img src={youtube} className="chat-img" />
            </div>
            <div className="chat-mid">
              <span className="chat-name">Чат{chat.name}</span >
              <span className="chat-last">last Message</span >
            </div>
            <span className="chat-time"> вчера</span >


          </div>

        ))}
      </div>
    </div>
  );
};

export default AllChat;
