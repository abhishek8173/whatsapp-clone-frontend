import React from 'react'
import './Sidebar.css'
import { useEffect } from 'react';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import { Avatar, IconButton } from '@mui/material';
import SidebarChat from './SidebarChat';
import { UserAuth } from './context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try{
            await logOut();
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        if(user?.email == null){
            navigate('/SignIn');
        }
    }, [user])

  return (
    <div className='sidebar'>
        <div className='sidebar__header'>
            <Avatar className='sidebar_headerAvatar' src={user?.photoURL} />
            <div className='sidebar__headerRight'>
                <IconButton className='donutIcon'>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton className='addChatIcon'>
                    <AddOutlinedIcon />
                </IconButton>
                <IconButton onClick = {handleSignOut} className='logOutIcon'>
                    <LogoutIcon />
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