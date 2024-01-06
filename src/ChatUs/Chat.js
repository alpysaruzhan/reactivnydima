import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AuthApi, ChatApi, MessageApi, UsersApi } from 'market_place';
import { Instance } from '../GateWay/base';
import "./Chat.css";

const Chat = (props) => {
    const [chats, setChats] = useState([]);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState(""); 
    const { chatId } = useParams();
    const [ user, setUser ] = useState([])
    const Chat = new ChatApi(Instance);
    const Message = new MessageApi(Instance);
    const Users = new UsersApi(Instance); 

    useEffect(() => {
        Users.usersCurrentUserApiV1UsersMeGet((error, data, reponse) => {
            if (error) { 
                console.error(error)
            } else { 
                setUser(data)
            }
        })
        Chat.chatGetChatMessagesApiV1ChatChatIdMessagesGet(chatId, { start: 0, end: 10 }, (error, data, response) => {
            if (error) {
                console.error(error);
            } else {
                setMessages(data.objects);
                console.log("Fetched messages:", data);
            }
        });

        Chat.chatGetChatsApiV1ChatGet((error, data, response) => {
            if (error) {
                console.error(error);
            } else {
                console.log("Fetched chats:", data);
                setChats(data.objects);
            }
        });
    }, []);

    const sendMessage = () => {
        Message.messageSendMessageApiV1MessageChatIdSendMessagePost({ text: newMessage }, chatId, (error, data, response) => {
            if (error) {
                console.error("Error sending message:", error);
            } else {
                setMessages([...messages, data]); 
                setNewMessage(""); 
            }
        });
    };



    return (
        <div>
            <div className="chat-container">
                {Array.isArray(messages) && messages.map((message) => (
                    <div key={message.id} className={`chat ${chatId === String(message.id) ? 'active-chat' : ''}`}>
                        <div className='mess'>
                            <div className="message-container">
                                <div className='mess1'>
                                    {message.fromUser.id === user.id
                                        ? 'Вы: '
                                        : `${message.fromUser.email}: `
                                    }
                                    {message.text}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className='input-mes'>
                    <input
                        type="text"
                        placeholder="Введите ваше сообщение"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button onClick={sendMessage}>Отправить</button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
