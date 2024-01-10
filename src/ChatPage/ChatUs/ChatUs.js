import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AuthApi, ChatApi, MessageApi, UsersApi } from 'market_place';
import { Instance } from '../../GateWay/base';
import "./ChatUs.css";
import defaultImage from "../../img/default.png";

const ChatUs = (props) => {
    const [chats, setChats] = useState([]);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState(""); 
    const { chatId } = useParams();
    const [chatObj, setChatObj] = useState([]); 
    const [ user, setUser ] = useState([])
    const Chat = new ChatApi(Instance);
    const Message = new MessageApi(Instance);
    const Users = new UsersApi(Instance); 
    const [ file, setFile ] = useState(defaultImage)

    const handleImageChange = (event) => {
        const files = event.target.files;
        if (files.length === 0) {
            console.error('Файл не выбран');
            return;
        }
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (!(file instanceof Blob)) {
                console.error('Выбранный файл не является Blob');
                continue;
            }
            const reader = new FileReader();
            reader.onload = (e) => {
                setFile(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };
    

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
                data.objects.forEach((v) => { 
                    if (v.id === chatId) { 
                        setChatObj(v)
                    }
                })
            }
        });
    }, []);

    const sendMessage = () => {
        let data = {}
        if (file !== null || file !== undefined && (newMessage === null || newMessage === undefined)) {  // ненавижу js  
            data = { file: file }
        } else if (file !== null || file !== undefined) { 
            data = { text: newMessage, file: file }
        } else { 
            data = { text: newMessage }
        }
        Message.messageSendMessageApiV1MessageChatIdSendMessagePost(data, chatId, (error, data, response) => {
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
                {chatObj.type !== "NOTIFICATION" ? 
                <div className='input-mes'>
                    <input
                        type="text"
                        placeholder="Введите ваше сообщение"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button onClick={sendMessage}>Отправить</button>
                    <input type="file" onClick={handleImageChange}  />
                </div> : 
                <div>
                    <p>Этот чат только для нотификации, в него нельзя писать</p>
                </div>}
                </div>
        </div>
    );
};

export default ChatUs;
