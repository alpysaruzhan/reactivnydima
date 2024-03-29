import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AuthApi, ChatApi, MessageApi, UsersApi } from 'market_place';
import { Instance } from '../../GateWay/base';
import "./ChatUs.css";
import defaultImage from "../../img/default.png";

const ChatUs = (props) => {

    const [newMessage, setNewMessage] = useState("");
    // console.log("propchat ebani", props.currChat.type);
    const chatId = props.currChat.id //  props.chat.chatId //useParams();
    const [user, setUser] = useState([]);
    const [messages, setMessages] = useState([]);


    const Chat = new ChatApi(Instance);
    const Message = new MessageApi(Instance);
    const Users = new UsersApi(Instance);
    const [file, setFile] = useState(defaultImage)

    // console.log("props", props);
    const handleImageChange = (event) => {
        const files = event.target.files;
        if (files.length === 0) {
            setFile(null)
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



    const sendMessage = () => {
        let data = {}
        // if (file !== null || file !== undefined && (newMessage === null || newMessage === undefined)) {  // ненавижу js  
        //     // data = { file: { file: file } }
        // } else if (file !== null || file !== undefined) { 
        //     data = { text: newMessage,  } //file: { file: file }
        // } else { 
        //     data = { text: newMessage }
        // }
        data = { text: newMessage }
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
        <div className='right-chat'>
            <div className='chat-header'>
                <div className="chat-img-div" >
                    <img style={{ display: props.isDivVisible ? 'none' : 'block' }} onClick={props.toggleVisibility} src="https://www.kindpng.com/picc/m/233-2338375_go-back-icon-png-transparent-png.png" className="chat-img" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Breezeicons-actions-22-mail-attachment.svg/2048px-Breezeicons-actions-22-mail-attachment.svg.png" className="chat-img" />
                </div>
                <div className="chat-mid">
                    <span className="chat-name"> {props.currChat.name}</span >
                    <span className="chat-undername">Офицальный профиль</span >
                </div>
            </div>
            <div className='chat-main'>
                {Array.isArray(props.messages) && props.messages.map((message) => (
                    <div key={message.id} className="chat-row">
                        <div className={`message   ${message.fromUser.id === props.currChat.participants[0].id ? 'message-my' : 'message-your'}`}>
                            {message.text}
                            <span className="message-last">{message.updatedAt.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })}</span >
                        </div>

                    </div>
                ))}
            </div>

            {props.currChat.type !== "NOTIFICATIONS" ?
                <div className='chat-footer'>

                    <div className="chat-upload">
                        <label for="upload-input">
                            <img className="upload-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Breezeicons-actions-22-mail-attachment.svg/2048px-Breezeicons-actions-22-mail-attachment.svg.png" />
                        </label>
                        <input id="upload-input" type="file" onClick={handleImageChange} />
                    </div>

                    <input
                        className="chat-input"
                        type="text"
                        placeholder="Cообщение"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />

                    <button className="chat-send" onClick={sendMessage} >
                        <img className="send-img" src="https://w7.pngwing.com/pngs/368/96/png-transparent-fly-messager-send-communication-email-message-glyphs-icon.png" />
                    </button>
                </div>
                :
                <div>
                    <p>Этот чат только для нотификации, в него нельзя писать</p>
                </div>}
        </div>


    );
};

export default ChatUs;
