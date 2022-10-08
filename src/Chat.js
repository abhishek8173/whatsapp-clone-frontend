import React from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import { useState, useEffect, useRef } from 'react';
import axios from './axios';
import { UserAuth } from './context/AuthContext';
import Pic from './Asapp_logo1.png';
import LogoutIcon from '@mui/icons-material/Logout';
import SendIcon from '@mui/icons-material/Send';
//import { useNavigate } from 'react-router-dom';
//import Messages from './Messages';

function Chat({ messages }) {
  
  const { user, logOut } = UserAuth();
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  //const navigate = useNavigate();

  const handleSignOut = async () => {
    try{
        await logOut();
    }catch(err){
        console.log(err);
    }
}

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  var date = new Date();

  const sendMessage = (e) => {
    e.preventDefault();
    if(input !== ""){
      var current_time = date.getHours()+":"+date.getMinutes();
      var current_date = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
      axios.post("/messages/new", {
        name: user?.displayName,
        message: input,
        date: current_date,
        time: current_time,
      })
      setInput('');
    }
  }

  
  return (
    <div className='chat'>
        <div className='chat__header'>
          <Avatar src={Pic} />
          <div className='chat__headerInfo'>
            <h2>Test Room</h2>
            <p>Status</p>
          </div>
          <div className='chat__headerRight'>
            <IconButton className='chat__searchMessage'>
              <SearchOutlinedIcon/>
            </IconButton>
            <IconButton onClick={handleSignOut} className='chat__logOut'>
              <LogoutIcon />
            </IconButton>
            <IconButton className='chat__moreOptions'>
              <MoreVertIcon/>
            </IconButton>
          </div>
        </div>

        <div className='chat__body'>
          {messages.map((message) => (
            <div key = {message._id} className={`chat__message ${message.name !== user?.displayName && "chat__receive"}`}>
              <span className='chat__name'>{message.name}</span>
              <div className='chat__messageandtime'>
                  <p>{message.message}</p>
                  <span className='chat__timestamp'>{((message.time !== undefined)?message.time:("HH:MM")) + " | " + message.date}</span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className='chat__footer'>
          <div className='chat__footerLeft'>
            <IconButton className='chat__emoteMenu'>
              <InsertEmoticonIcon />
            </IconButton>
            <IconButton className='chat__attachButton'>
              <AttachFileOutlinedIcon />
            </IconButton>
          </div>
          <form className='chat__form'>
            <div className='chat__messageInput'>
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Type a message' type='text' />
            </div>
            <IconButton onClick={sendMessage} type='submit' className='chat__sendIcon'>
              <SendIcon />
            </IconButton>
          </form>
        </div>
    </div>
  )
}

export default Chat