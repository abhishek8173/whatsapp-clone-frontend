import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import { Avatar, IconButton } from '@mui/material';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar__header'>
            <Avatar className='sidebar_headerAvatar' src='https://i.pinimg.com/736x/77/9e/5e/779e5e5ffbec6d9c0254001656c12f46.jpg' />
            <div className='sidebar__headerRight'>
                <IconButton className='donutIcon'>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton className='chatIcon'>
                    <ChatIcon />
                </IconButton>
                <IconButton className='moreIcon'>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>

        <div className='sidebar__search'>
            <div className='sidebar__searchContainer'>
                <IconButton className='sidebar__searchButton'>
                    <SearchOutlinedIcon />
                </IconButton>
                <input placeholder='Search or start new chat' type='text' />
            </div>
            <IconButton className='sidebar__searchChatFilter'>
                <FilterListOutlinedIcon />
            </IconButton>
        </div>

        <div className='sidebar__chats'>
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
        </div>
    </div>
  )
}

export default Sidebar