import './App.css';
import { Route, Routes } from 'react-router-dom';
import Chat from './Chat';
import Sidebar from './Sidebar';
import {useEffect, useState} from 'react';
import Pusher from 'pusher-js';
import axios from './axios';
import Login from './Login';
import { AuthContextProvider } from './context/AuthContext';
import Protected from './Protected';
//import { useNavigate } from 'react-router-dom';


function App() {
  const [messages, setMessages] = useState([]);

  useEffect(()=>{
    axios.get("/messages/sync").then((response)=>{
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    var pusher = new Pusher('f90ba83543755f021ee3', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  
  console.log(messages);

  return (
    <div className="app">
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={
            <Protected>
              <div className='app__body'>
                <Sidebar />
                <Chat messages={messages}/>
              </div>
            </Protected>
          } />
          <Route path='SignIn' element={
            <div className='app__login'>
              <Login />
            </div>
          } />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
