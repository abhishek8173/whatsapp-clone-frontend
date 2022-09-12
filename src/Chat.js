import React from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicIcon from '@mui/icons-material/Mic';
import Messages from './Messages';
import Recieved from './Recieved';

function Chat() {
  return (
    <div className='chat'>
        <div className='chat__header'>
          <Avatar />
          <div className='chat__headerInfo'>
            <h2>Room Name</h2>
            <p>Status</p>
          </div>
          <div className='chat__headerRight'>
            <IconButton className='chat__searchMessage'>
              <SearchOutlinedIcon/>
            </IconButton>
            <IconButton className='chat__moreOptions'>
              <MoreVertIcon/>
            </IconButton>
          </div>
        </div>

        <div className='chat__body'>
          <Messages />
          <Recieved />
          <Messages />
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
          <form className='chat__messageInput'>
            <input placeholder='Type a message' type='text' />
            <button type='submit'>Send a message</button>
          </form>
          <div className='chat__footerRight'>
            <IconButton className='chat__micButton'>
              <MicIcon />
            </IconButton>
          </div>
        </div>
    </div>
  )
}

export default Chat